package com.isep.feedback.api.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * User
 */

public class User   {
  @JsonProperty("id")
  private Long id;

  @JsonProperty("username")
  private String username;

  @JsonProperty("firstName")
  private String firstName;

  @JsonProperty("lastName")
  private String lastName;

  @JsonProperty("isep_id")
  private Long isepId;

  @JsonProperty("email")
  private String email;

  @JsonProperty("password")
  private String password;

  @JsonProperty("phone")
  private String phone;

  @JsonProperty("role")
  private String role;

  @JsonProperty("avatar")
  private String avatar;

  @JsonProperty("color")
  private String color;

  @JsonProperty("courses_id")
  @Valid
  private List<String> coursesId = null;

  @JsonProperty("stakeholders_id")
  @Valid
  private List<String> stakeholdersId = null;

  public User id(Long id) {
    this.id = id;
    return this;
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

  public User phone(String phone) {
    this.phone = phone;
    return this;
  }

  /**
   * Get phone
   * @return phone
  */
  @ApiModelProperty(value = "")


  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public User role(String role) {
    this.role = role;
    return this;
  }

  /**
   * Get role
   * @return role
  */
  @ApiModelProperty(value = "")


  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
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

  public User coursesId(List<String> coursesId) {
    this.coursesId = coursesId;
    return this;
  }

  public User addCoursesIdItem(String coursesIdItem) {
    if (this.coursesId == null) {
      this.coursesId = new ArrayList<>();
    }
    this.coursesId.add(coursesIdItem);
    return this;
  }

  /**
   * Get coursesId
   * @return coursesId
  */
  @ApiModelProperty(value = "")


  public List<String> getCoursesId() {
    return coursesId;
  }

  public void setCoursesId(List<String> coursesId) {
    this.coursesId = coursesId;
  }

  public User stakeholdersId(List<String> stakeholdersId) {
    this.stakeholdersId = stakeholdersId;
    return this;
  }

  public User addStakeholdersIdItem(String stakeholdersIdItem) {
    if (this.stakeholdersId == null) {
      this.stakeholdersId = new ArrayList<>();
    }
    this.stakeholdersId.add(stakeholdersIdItem);
    return this;
  }

  /**
   * Get stakeholdersId
   * @return stakeholdersId
  */
  @ApiModelProperty(value = "")


  public List<String> getStakeholdersId() {
    return stakeholdersId;
  }

  public void setStakeholdersId(List<String> stakeholdersId) {
    this.stakeholdersId = stakeholdersId;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    User user = (User) o;
    return Objects.equals(this.id, user.id) &&
        Objects.equals(this.username, user.username) &&
        Objects.equals(this.firstName, user.firstName) &&
        Objects.equals(this.lastName, user.lastName) &&
        Objects.equals(this.isepId, user.isepId) &&
        Objects.equals(this.email, user.email) &&
        Objects.equals(this.password, user.password) &&
        Objects.equals(this.phone, user.phone) &&
        Objects.equals(this.role, user.role) &&
        Objects.equals(this.avatar, user.avatar) &&
        Objects.equals(this.color, user.color) &&
        Objects.equals(this.coursesId, user.coursesId) &&
        Objects.equals(this.stakeholdersId, user.stakeholdersId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, username, firstName, lastName, isepId, email, password, phone, role, avatar, color, coursesId, stakeholdersId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class User {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    isepId: ").append(toIndentedString(isepId)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
    sb.append("    avatar: ").append(toIndentedString(avatar)).append("\n");
    sb.append("    color: ").append(toIndentedString(color)).append("\n");
    sb.append("    coursesId: ").append(toIndentedString(coursesId)).append("\n");
    sb.append("    stakeholdersId: ").append(toIndentedString(stakeholdersId)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

