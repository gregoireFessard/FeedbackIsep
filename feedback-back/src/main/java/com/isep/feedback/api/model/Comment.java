package com.isep.feedback.api.model;

import java.util.Date;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;

/**
 * Comment
 */

@Entity
@Table(name = "comments")
public class Comment   {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name= "id", nullable = false, unique = true)
  @JsonProperty("id")
  private Long id;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user")
  @JsonProperty("user")
  private User user;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "course")
  @JsonProperty("course")
  private Course course;

  @Column(name= "content")
  @JsonProperty("content")
  private String content;

  @Temporal(TemporalType.TIMESTAMP)
  @Column(name = "dateTime")
  @JsonProperty("dateTime")
  private Date dateTime;

  @Column(name = "number_like")
  @JsonProperty("number_like")
  private Integer numberLike;

  @Column(name = "number_dislike")
  @JsonProperty("number_dislike")
  private Integer numberDislike;

  @Column(name = "parent_id")
  @JsonProperty("parent_id")
  private Long parentId;

  public Comment id(Long id) {
    this.id = id;
    return this;
  }

  public Comment() {
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

  /*public Comment userId(Long userId) {
    this.userId = userId;
    return this;
  }*/

  public User getUser() {
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

  /**
   * Get userId
   * @return userId
  */
  @ApiModelProperty(value = "")


 /* public Long getUserId() {
    return userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public Comment courseId(Long courseId) {
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
  }

  public Comment content(String content) {
    this.content = content;
    return this;
  }*/



  /**
   * Get content
   * @return content
  */
  /*@ApiModelProperty(value = "")*/


  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public Comment dateTime(Date dateTime) {
    this.dateTime = dateTime;
    return this;
  }

  /**
   * Get dateTime
   * @return dateTime
  */
  @ApiModelProperty(value = "")


  public Date getDateTime() {
    return dateTime;
  }

  public void setDateTime(Date dateTime) {
    this.dateTime = dateTime;
  }

  public Comment numberLike(Integer numberLike) {
    this.numberLike = numberLike;
    return this;
  }

  /**
   * Get numberLike
   * @return numberLike
  */
  @ApiModelProperty(value = "")


  public Integer getNumberLike() {
    return numberLike;
  }

  public void setNumberLike(Integer numberLike) {
    this.numberLike = numberLike;
  }

  public Comment numberDislike(Integer numberDislike) {
    this.numberDislike = numberDislike;
    return this;
  }

  /**
   * Get numberDislike
   * @return numberDislike
  */
  @ApiModelProperty(value = "")


  public Integer getNumberDislike() {
    return numberDislike;
  }

  public void setNumberDislike(Integer numberDislike) {
    this.numberDislike = numberDislike;
  }

  public Comment parentId(Long parentId) {
    this.parentId = parentId;
    return this;
  }

  /**
   * Get parentId
   * @return parentId
  */
  @ApiModelProperty(value = "")


  public Long getParentId() {
    return parentId;
  }

  public void setParentId(Long parentId) {
    this.parentId = parentId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Comment comment = (Comment) o;
    return Objects.equals(this.id, comment.id) &&
        Objects.equals(this.user, comment.user) &&
        Objects.equals(this.course, comment.course) &&
        Objects.equals(this.content, comment.content) &&
        Objects.equals(this.dateTime, comment.dateTime) &&
        Objects.equals(this.numberLike, comment.numberLike) &&
        Objects.equals(this.numberDislike, comment.numberDislike) &&
        Objects.equals(this.parentId, comment.parentId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, user, course, content, dateTime, numberLike, numberDislike, parentId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Comment {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    userId: ").append(toIndentedString(user)).append("\n");
    sb.append("    courseId: ").append(toIndentedString(course)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    dateTime: ").append(toIndentedString(dateTime)).append("\n");
    sb.append("    numberLike: ").append(toIndentedString(numberLike)).append("\n");
    sb.append("    numberDislike: ").append(toIndentedString(numberDislike)).append("\n");
    sb.append("    parentId: ").append(toIndentedString(parentId)).append("\n");
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

