package com.isep.feedback.configuration;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource securityDataSource;


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        auth.jdbcAuthentication().dataSource(securityDataSource);

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/users/login").permitAll()
                .antMatchers("/users/logout").permitAll()
                .antMatchers(HttpMethod.PUT, "/users").hasAnyRole("TEACHER", "STUDENT")
                .antMatchers(HttpMethod.POST, "/users").hasRole("ADMIN")
                .antMatchers("/users/{\\\\d+}").authenticated()
                .antMatchers("/courses/**").authenticated()
                .antMatchers(HttpMethod.POST,"/courses/{\\\\d+}/courseDocument").hasAnyRole("ADMIN","TEACHER")
                .antMatchers(HttpMethod.DELETE,"/courses/{\\\\d+}/courseDocument/{\\\\d+}").hasAnyRole("ADMIN","TEACHER")
                .antMatchers("/conversations/**").authenticated()
        .and()
            .formLogin().permitAll()
        .and()
            .logout().permitAll();
    }

}



