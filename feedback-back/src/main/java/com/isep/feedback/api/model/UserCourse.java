package com.isep.feedback.api.model;

import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;

/**
 * UserCourse
 */


@Entity
@Table(name = "user_course")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class UserCourse   {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  @JsonProperty("id")
  private Long id;

  @JsonProperty("user")
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id")
  private User user;

  @JsonProperty("course")
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "course_id")
  private Course course;


  public UserCourse id(Long id) {
    this.id = id;
    return this;
  }

  public UserCourse() {
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

  public User getUser() {
    user.setPassword(null);
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Course getCourse() {
    return course;
  }

  public void setCourse(Course course) {
    this.course = course;
  }

  /*public UserCourse userId(Long userId) {
    this.userId = userId;
    return this;
  }*/

  /**
   * Get userId
   * @return userId
  */
  @ApiModelProperty(value = "")


  /*public Long getUserId() {
    return userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }*/

  /*public UserCourse courseId(Long courseId) {
    this.courseId = courseId;
    return this;
  }*/

  /**
   * Get courseId
   * @return courseId
  */
  /*@ApiModelProperty(value = "")


  public Long getCourseId() {
    return courseId;
  }

  public void setCourseId(Long courseId) {
    this.courseId = courseId;
  }*/


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UserCourse userCourse = (UserCourse) o;
    return Objects.equals(this.id, userCourse.id) &&
        Objects.equals(this.user, userCourse.user) &&
        Objects.equals(this.course, userCourse.course);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, user, course);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UserCourse {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    userId: ").append(toIndentedString(user)).append("\n");
    sb.append("    courseId: ").append(toIndentedString(course)).append("\n");
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

