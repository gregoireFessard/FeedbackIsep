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
 * Course
 */

public class Course   {
  @JsonProperty("id")
  private Long id;

  @JsonProperty("teacher_id")
  private Long teacherId;

  @JsonProperty("material_id")
  private Long materialId;

  @JsonProperty("dateTime")
  private String dateTime;

  @JsonProperty("duration")
  private String duration;

  @JsonProperty("comments_id")
  @Valid
  private List<Integer> commentsId = null;

  @JsonProperty("couseDocuments_id")
  @Valid
  private List<Integer> couseDocumentsId = null;

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

  public Course teacherId(Long teacherId) {
    this.teacherId = teacherId;
    return this;
  }

  /**
   * Get teacherId
   * @return teacherId
  */
  @ApiModelProperty(value = "")


  public Long getTeacherId() {
    return teacherId;
  }

  public void setTeacherId(Long teacherId) {
    this.teacherId = teacherId;
  }

  public Course materialId(Long materialId) {
    this.materialId = materialId;
    return this;
  }

  /**
   * Get materialId
   * @return materialId
  */
  @ApiModelProperty(value = "")


  public Long getMaterialId() {
    return materialId;
  }

  public void setMaterialId(Long materialId) {
    this.materialId = materialId;
  }

  public Course dateTime(String dateTime) {
    this.dateTime = dateTime;
    return this;
  }

  /**
   * Get dateTime
   * @return dateTime
  */
  @ApiModelProperty(value = "")


  public String getDateTime() {
    return dateTime;
  }

  public void setDateTime(String dateTime) {
    this.dateTime = dateTime;
  }

  public Course duration(String duration) {
    this.duration = duration;
    return this;
  }

  /**
   * Get duration
   * @return duration
  */
  @ApiModelProperty(value = "")


  public String getDuration() {
    return duration;
  }

  public void setDuration(String duration) {
    this.duration = duration;
  }

  public Course commentsId(List<Integer> commentsId) {
    this.commentsId = commentsId;
    return this;
  }

  public Course addCommentsIdItem(Integer commentsIdItem) {
    if (this.commentsId == null) {
      this.commentsId = new ArrayList<>();
    }
    this.commentsId.add(commentsIdItem);
    return this;
  }

  /**
   * Get commentsId
   * @return commentsId
  */
  @ApiModelProperty(value = "")


  public List<Integer> getCommentsId() {
    return commentsId;
  }

  public void setCommentsId(List<Integer> commentsId) {
    this.commentsId = commentsId;
  }

  public Course couseDocumentsId(List<Integer> couseDocumentsId) {
    this.couseDocumentsId = couseDocumentsId;
    return this;
  }

  public Course addCouseDocumentsIdItem(Integer couseDocumentsIdItem) {
    if (this.couseDocumentsId == null) {
      this.couseDocumentsId = new ArrayList<>();
    }
    this.couseDocumentsId.add(couseDocumentsIdItem);
    return this;
  }

  /**
   * Get couseDocumentsId
   * @return couseDocumentsId
  */
  @ApiModelProperty(value = "")


  public List<Integer> getCouseDocumentsId() {
    return couseDocumentsId;
  }

  public void setCouseDocumentsId(List<Integer> couseDocumentsId) {
    this.couseDocumentsId = couseDocumentsId;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Course course = (Course) o;
    return Objects.equals(this.id, course.id) &&
        Objects.equals(this.teacherId, course.teacherId) &&
        Objects.equals(this.materialId, course.materialId) &&
        Objects.equals(this.dateTime, course.dateTime) &&
        Objects.equals(this.duration, course.duration) &&
        Objects.equals(this.commentsId, course.commentsId) &&
        Objects.equals(this.couseDocumentsId, course.couseDocumentsId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, teacherId, materialId, dateTime, duration, commentsId, couseDocumentsId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Course {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    teacherId: ").append(toIndentedString(teacherId)).append("\n");
    sb.append("    materialId: ").append(toIndentedString(materialId)).append("\n");
    sb.append("    dateTime: ").append(toIndentedString(dateTime)).append("\n");
    sb.append("    duration: ").append(toIndentedString(duration)).append("\n");
    sb.append("    commentsId: ").append(toIndentedString(commentsId)).append("\n");
    sb.append("    couseDocumentsId: ").append(toIndentedString(couseDocumentsId)).append("\n");
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

