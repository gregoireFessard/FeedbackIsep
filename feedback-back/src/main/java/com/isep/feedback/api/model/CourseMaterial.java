package com.isep.feedback.api.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * CourseMaterial
 */

@Entity
@Table(name = "course_materials")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class CourseMaterial   {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  @JsonProperty("id")
  private Long id;

  @Column(name = "name")
  @JsonProperty("name")
  private String name;

  @Column(name= "users")
  @JsonProperty("users")
  @ManyToMany(fetch = FetchType.LAZY, mappedBy = "courses")
  private List<User> users = new ArrayList<>();

  public CourseMaterial() {
  }

  public CourseMaterial id(Long id) {
    this.id = id;
    return this;
  }

  public CourseMaterial(String name) {
    this.name = name;
  }

  public List<User> getUsers() {
    return users;
  }

  public List<User> addUser(User user){
    this.users.add(user);
    return users;
  }

  public void setUsers(List<User> users) {
    this.users = users;
  }

  /**
   * Get id
   * @return id
  */
  @ApiModelProperty(value = "")


  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public CourseMaterial name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
  */
  @ApiModelProperty(value = "")


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CourseMaterial courseMaterial = (CourseMaterial) o;
    return Objects.equals(this.id, courseMaterial.id) &&
        Objects.equals(this.name, courseMaterial.name);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CourseMaterial {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

