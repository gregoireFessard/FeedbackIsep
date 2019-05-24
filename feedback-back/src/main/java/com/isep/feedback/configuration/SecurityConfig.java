package com.isep.feedback.configuration;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource securityDataSource;


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().dataSource(securityDataSource);
    }

    /*@Override
    protected void configure(HttpSecurity http) throws Exception {

        http.authorizeRequests()
                .antMatchers("/", "/v2/api-docs", "/configuration/ui", "/swagger-resources", "/configuration/security", "/swagger-ui.html", "/webjars/**","/swagger-resources/configuration/ui","/swagger-ui.html").permitAll()
                .antMatchers("/").hasRole("ADMIN")
                *//*.antMatchers("/users/login").permitAll()
                .antMatchers("/users/logout").permitAll()
                .antMatchers(HttpMethod.PUT, "/users").hasAnyRole("TEACHER", "STUDENT")
                .antMatchers(HttpMethod.POST, "/users").hasRole("ADMIN")
                .antMatchers("/users/{\\\\d+}").authenticated()
                .antMatchers("/courses/**").authenticated()
                .antMatchers(HttpMethod.POST,"/courses/{\\\\d+}/courseDocument").hasAnyRole("ADMIN","TEACHER")
                .antMatchers(HttpMethod.DELETE,"/courses/{\\\\d+}/courseDocument/{\\\\d+}").hasAnyRole("ADMIN","TEACHER")
                .antMatchers("/conversations/**").authenticated()*//*
        .and()
            .formLogin().permitAll()
        .and()
            .logout().permitAll();
    }*/

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeRequests()
                // No need authentication.
                .antMatchers("/", "/v2/api-docs", "/configuration/ui", "/swagger-resources", "/configuration/security", "/swagger-ui.html", "/webjars/**","/swagger-resources/configuration/ui","/swagger-ui.html").permitAll()
                .antMatchers(HttpMethod.POST, "/login").permitAll() //
                .antMatchers(HttpMethod.GET, "/login").permitAll() // For Test on Browser
                // Need authentication.
                //.anyRequest().authenticated()
                //
                .anyRequest().permitAll()
                .and()
                //
                // Add Filter 1 - JWTLoginFilter
                //
                .addFilterBefore(new JWTLoginFilter("/login", authenticationManager()),
                        UsernamePasswordAuthenticationFilter.class)
                //
                // Add Filter 2 - JWTAuthenticationFilter
                //
                .addFilterBefore(new JWTAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

}



