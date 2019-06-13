package com.isep.feedback.api.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;

/**
 * CourseDocument
 */

@Entity
@Table(name = "course_documents")
public class CourseDocument   {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  @JsonProperty("id")
  private Long id;


  @Column(name = "name")
  @JsonProperty("name")
  private String name;

  @Column(name = "document")
  @JsonProperty("document")
  private String document;

  @JsonProperty("user")
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user")
  private User user;

  @JsonProperty("course")
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "course")
  private Course course;

  public CourseDocument id(Long id) {
    this.id = id;
    return this;
  }

  public CourseDocument() {
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

  public CourseDocument name(String name) {
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

  public CourseDocument document(String document) {
    this.document = document;
    return this;
  }

  /**
   * Get document
   * @return document
  */
  @ApiModelProperty(value = "")


  public String getDocument() {
    return document;
  }

  public void setDocument(String document) {
    this.document = document;
  }

  /*public CourseDocument userId(Long userId) {
    this.userId = userId;
    return this;
  }*/

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

  public CourseDocument(User user) {
    this.user = user;
  }

  public CourseDocument(Course course) {
    this.course = course;
  }

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

  /*public CourseDocument courseId(Long courseId) {
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
    CourseDocument courseDocument = (CourseDocument) o;
    return Objects.equals(this.id, courseDocument.id) &&
        Objects.equals(this.name, courseDocument.name) &&
        Objects.equals(this.document, courseDocument.document) &&
        Objects.equals(this.user, courseDocument.user) &&
        Objects.equals(this.course, courseDocument.course);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, document, user, course);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CourseDocument {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    document: ").append(toIndentedString(document)).append("\n");
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

