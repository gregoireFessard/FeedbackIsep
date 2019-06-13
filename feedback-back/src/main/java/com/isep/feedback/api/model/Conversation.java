package com.isep.feedback.api.model;

import java.util.Date;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Conversation
 */

@Entity
@Table(name = "conversations")
public class Conversation   {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  @JsonProperty("id")
  private Long id;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "`from`")
  @JsonProperty("from")
  private User from;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "`to`")
  @JsonProperty("to")
  private User to;

  @Column(name = "subject")
  @JsonProperty("subject")
  private String subject;

  @Column(name = "status")
  @JsonProperty("status")
  private String status;

  @Column(name = "dateTime")
  @Temporal(TemporalType.TIMESTAMP)
  @JsonProperty("dateTime")
  private Date dateTime;


  public Conversation id(Long id) {
    this.id = id;
    return this;
  }


  public User getFrom() {
    return from;
  }

  public void setFrom(User from) {
    this.from = from;
  }

  public User getTo() {
    return to;
  }

  public void setTo(User to) {
    this.to = to;
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

  /*public Conversation from(Long fromId) {
    this.fromId = fromId;
    return this;
  }*/

  /**
   * Get fromId
   * @return fromId
  */
  /*@ApiModelProperty(value = "")*/


  /*public Long getFromId() {
    return fromId;
  }

  public void setFromId(Long fromId) {
    this.fromId = fromId;
  }

  public Conversation toId(Long toId) {
    this.toId = toId;
    return this;
  }*/

  /**
   * Get toId
   * @return toId
  */
  /*@ApiModelProperty(value = "")


  public Long getToId() {
    return toId;
  }

  public void setToId(Long toId) {
    this.toId = toId;
  }*/

  public Conversation subject(String subject) {
    this.subject = subject;
    return this;
  }

  /**
   * Get subject
   * @return subject
  */
  @ApiModelProperty(value = "")


  public String getSubject() {
    return subject;
  }

  public void setSubject(String subject) {
    this.subject = subject;
  }

  public Conversation status(String status) {
    this.status = status;
    return this;
  }

  /**
   * Get status
   * @return status
  */
  @ApiModelProperty(value = "")


  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Conversation dateTime(Date dateTime) {
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


  /**
   * Get messagesId
   * @return messagesId
  */
  @ApiModelProperty(value = "")


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Conversation conversation = (Conversation) o;
    return Objects.equals(this.id, conversation.id) &&
        Objects.equals(this.from, conversation.from) &&
        Objects.equals(this.to, conversation.to) &&
        Objects.equals(this.subject, conversation.subject) &&
        Objects.equals(this.status, conversation.status) &&
        Objects.equals(this.dateTime, conversation.dateTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, from, to, subject, status, dateTime);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Conversation {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    fromId: ").append(toIndentedString(from)).append("\n");
    sb.append("    toId: ").append(toIndentedString(to)).append("\n");
    sb.append("    subject: ").append(toIndentedString(subject)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    dateTime: ").append(toIndentedString(dateTime)).append("\n");
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

