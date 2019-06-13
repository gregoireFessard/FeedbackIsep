package com.isep.feedback.api.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.security.core.userdetails.UserDetails;


import javax.persistence.*;

/**
 * User
 */

@Entity
@Table(name = "users")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User {


  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id",unique=true, nullable = false)
  @JsonProperty("id")
  private Long id;

  @Column(name = "username")
  @JsonProperty("username")
  private String username;


  @Column(name = "enabled")
  @JsonProperty("enabled")
  private Boolean enabled;

  @Column(name = "firstname")
  @JsonProperty("firstName")
  private String firstName;

  @Column(name = "lastname")

  @JsonProperty("lastName")
  private String lastName;

  @JsonProperty("status")
  private String status;

  @Column(name = "isep_id")
  @JsonProperty("isep_id")
  private Long isepId;

  @Column(name = "mail")
  @JsonProperty("email")
  private String email;

  @Column(name = "password")
  @JsonProperty("password")
  private String password;

  @Column(name = "avatar")
  @JsonProperty("avatar")
  private String avatar;

  @Column(name = "color")
  @JsonProperty("color")
  private String color;


  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "parent")
  @JsonProperty("parent")
  private User parent = null;

  @Column(name = "materials")
  @JsonProperty("materials")
  @ManyToMany(fetch = FetchType.LAZY)
  /*@JoinTable(name="user_materials",
          joinColumns=@JoinColumn(name="user_id", referencedColumnName="id"),
          inverseJoinColumns=@JoinColumn(name="material_id", referencedColumnName="id"))*/
  private List<CourseMaterial> materials = new ArrayList<>();

  @Column(name= "courses")
  @JsonProperty("courses")
  /*@JoinTable(name="user_materials",
          joinColumns=@JoinColumn(name="course_id", referencedColumnName="id"),
          inverseJoinColumns=@JoinColumn(name="course_id", referencedColumnName="id"))*/
  @ManyToMany(fetch = FetchType.LAZY)
  private List<Course> courses;

  @Column(name= "teacher_courses")
  @JsonProperty("teacher_courses")
  /*@JoinTable(name="user_materials",
          joinColumns=@JoinColumn(name="course_id", referencedColumnName="id"),
          inverseJoinColumns=@JoinColumn(name="course_id", referencedColumnName="id"))*/
  @ManyToMany(fetch = FetchType.LAZY)
  private List<Course> teacher_courses;

  public User id(Long id) {
    this.id = id;
    return this;
  }

  public User(String username, Boolean enabled, String firstName, String lastName, Long isepId, String email, String password, String avatar, String color, User parent) {
    this.username = username;
    this.enabled = enabled;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isepId = isepId;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.color = color;
    this.parent = parent;

  }

  public User() {
  }

  public List<Course> getTeacher_courses() {
    return teacher_courses;
  }

  public void setTeacher_courses(List<Course> teacher_courses) {
    this.teacher_courses = teacher_courses;
  }

  public List<CourseMaterial> getMaterials() {
    return materials;
  }

  public void setMaterials(List<CourseMaterial> materials) {
    this.materials = materials;
  }

  public List<Course> getCourses() {
    return courses;
  }

  public void setCourses(List<Course> courses) {
    this.courses = courses;
  }

  public List<CourseMaterial> addMaterial(CourseMaterial material){
    materials.add(material);
    return materials;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
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

  public User username(String username) {
    this.username = username;
    return this;
  }

  /**
   * Get username
   * @return username
  */
  @ApiModelProperty(value = "")


  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public User enabled(Boolean enabled) {
    this.enabled = enabled;
    return this;
  }

  /**
   * Get enabled
   * @return enabled
  */
  @ApiModelProperty(value = "")


  public Boolean getEnabled() {
    return enabled;
  }

  public void setEnabled(Boolean enabled) {
    this.enabled = enabled;
  }

  public User firstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

  /**
   * Get firstName
   * @return firstName
  */
  @ApiModelProperty(value = "")


  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public User lastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

  /**
   * Get lastName
   * @return lastName
  */
  @ApiModelProperty(value = "")


  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public User isepId(Long isepId) {
    this.isepId = isepId;
    return this;
  }

  /**
   * Get isepId
   * @return isepId
  */
  @ApiModelProperty(value = "")


  public Long getIsepId() {
    return isepId;
  }

  public void setIsepId(Long isepId) {
    this.isepId = isepId;
  }

  public User email(String email) {
    this.email = email;
    return this;
  }

  /**
   * Get email
   * @return email
  */
  @ApiModelProperty(value = "")


  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public User password(String password) {
    this.password = password;
    return this;
  }

  /**
   * Get password
   * @return password
  */
  @ApiModelProperty(value = "")


  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public User avatar(String avatar) {
    this.avatar = avatar;
    return this;
  }

  /**
   * Get avatar
   * @return avatar
  */
  @ApiModelProperty(value = "")


  public String getAvatar() {
    return avatar;
  }

  public void setAvatar(String avatar) {
    this.avatar = avatar;
  }

  public User color(String color) {
    this.color = color;
    return this;
  }

  /**
   * Get color
   * @return color
  */
  @ApiModelProperty(value = "")


  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  /*public User parentId(Long parentId) {
    this.parentId = parentId;
    return this;
  }*/

  public User getParent() {
    return parent;
  }

  public void setParent(User parent) {
    this.parent = parent;
  }

  /**
   * Get parentId
   * @return parentId
  */
  @ApiModelProperty(value = "")


  /*public Long getParentId() {
    return parentId;
  }

  public void setParentId(Long parentId) {
    this.parentId = parentId;
  }*/


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    User user = (User) o;
    return Objects.equals(this.id, user.id) &&
        Objects.equals(this.username, user.username) &&
        Objects.equals(this.enabled, user.enabled) &&
        Objects.equals(this.firstName, user.firstName) &&
        Objects.equals(this.lastName, user.lastName) &&
        Objects.equals(this.isepId, user.isepId) &&
        Objects.equals(this.email, user.email) &&
        Objects.equals(this.password, user.password) &&
        Objects.equals(this.avatar, user.avatar) &&
        Objects.equals(this.color, user.color) &&
        Objects.equals(this.materials, user.materials) &&
        Objects.equals(this.parent, user.parent);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, username, enabled, firstName, lastName, isepId, email, password, avatar, color, parent);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class User {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
    sb.append("    enabled: ").append(toIndentedString(enabled)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    isepId: ").append(toIndentedString(isepId)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    avatar: ").append(toIndentedString(avatar)).append("\n");
    sb.append("    color: ").append(toIndentedString(color)).append("\n");
    sb.append("    parentId: ").append(toIndentedString(parent)).append("\n");
    sb.append("    materials: ").append(toIndentedString(materials)).append("\n");
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

