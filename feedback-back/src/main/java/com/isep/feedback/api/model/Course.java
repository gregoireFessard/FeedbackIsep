package com.isep.feedback.api.model;

import java.util.Date;
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
 * Course
 */

@Entity
@Table(name = "courses")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Course   {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  @JsonProperty("id")
  private Long id;


  @JsonProperty("teacher")
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "teacher_id")
  private User user;

  @JsonProperty("material")
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "material_id")
  private CourseMaterial material;

  @Column(name = "dateTime")
  @Temporal(TemporalType.TIMESTAMP)
  @JsonProperty("dateTime")
  private Date dateTime;

  @Column(name = "dateEnd")
  @Temporal(TemporalType.TIMESTAMP)
  @JsonProperty("dateEnd")
  private Date dateEnd;

  public Course() {
  }

  public Course id(Long id) {
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

  /*public Course teacherId(Long teacherId) {
    this.teacherId = teacherId;
    return this;
  }*/

  public User getUser() {
    user.setPassword(null);
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Course(User user) {
    this.user = user;
  }

  public CourseMaterial getMaterial() {
    return material;
  }

  public void setMaterial(CourseMaterial material) {
    this.material = material;
  }

  public Course(CourseMaterial material) {
    this.material = material;
  }

  /**
   * Get teacherId
   * @return teacherId
  */
  /*@ApiModelProperty(value = "")


  public Long getTeacherId() {
    return teacherId;
  }

  public void setTeacherId(Long teacherId) {
    this.teacherId = teacherId;
  }*/

  /*public Course materialId(Long materialId) {
    this.materialId = materialId;
    return this;
  }*/

  /**
   * Get materialId
   * @return materialId
  */
  @ApiModelProperty(value = "")


  /*public Long getMaterialId() {
    return materialId;
  }

  public void setMaterialId(Long materialId) {
    this.materialId = materialId;
  }*/

  public Course dateTime(Date dateTime) {
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

  public Course dateEnd(Date dateEnd) {
    this.dateEnd = dateEnd;
    return this;
  }

  /**
   * Get dateEnd
   * @return dateEnd
  */
  @ApiModelProperty(value = "")


  public Date getDuration() {
    return dateEnd;
  }

  public void setDuration(Date dateEnd) {
    this.dateEnd = dateEnd;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Course course = (Course) o;
    return Objects.equals(this.id, course.id) &&
        Objects.equals(this.user, course.user) &&
        Objects.equals(this.material, course.material) &&
        Objects.equals(this.dateTime, course.dateTime) &&
        Objects.equals(this.dateEnd, course.dateEnd);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, user, material, dateTime, dateEnd);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Course {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    teacherId: ").append(toIndentedString(user)).append("\n");
    sb.append("    materialId: ").append(toIndentedString(material)).append("\n");
    sb.append("    dateTime: ").append(toIndentedString(dateTime)).append("\n");
    sb.append("    dateEnd: ").append(toIndentedString(dateEnd)).append("\n");
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

