package com.isep.feedback.api.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Message
 */

public class Message   {
  @JsonProperty("id")
  private Long id;

  @JsonProperty("conversation_id")
  private Long conversationId;

  @JsonProperty("is_from_sender")
  private Boolean isFromSender;

  @JsonProperty("content")
  private String content;

  @JsonProperty("read")
  private Boolean read;

  @JsonProperty("dateTime")
  private String dateTime;

  public Message id(Long id) {
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

  public Message conversationId(Long conversationId) {
    this.conversationId = conversationId;
    return this;
  }

  /**
   * Get conversationId
   * @return conversationId
  */
  @ApiModelProperty(value = "")


  public Long getConversationId() {
    return conversationId;
  }

  public void setConversationId(Long conversationId) {
    this.conversationId = conversationId;
  }

  public Message isFromSender(Boolean isFromSender) {
    this.isFromSender = isFromSender;
    return this;
  }

  /**
   * Get isFromSender
   * @return isFromSender
  */
  @ApiModelProperty(value = "")


  public Boolean getIsFromSender() {
    return isFromSender;
  }

  public void setIsFromSender(Boolean isFromSender) {
    this.isFromSender = isFromSender;
  }

  public Message content(String content) {
    this.content = content;
    return this;
  }

  /**
   * Get content
   * @return content
  */
  @ApiModelProperty(value = "")


  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public Message read(Boolean read) {
    this.read = read;
    return this;
  }

  /**
   * Get read
   * @return read
  */
  @ApiModelProperty(value = "")


  public Boolean getRead() {
    return read;
  }

  public void setRead(Boolean read) {
    this.read = read;
  }

  public Message dateTime(String dateTime) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Message message = (Message) o;
    return Objects.equals(this.id, message.id) &&
        Objects.equals(this.conversationId, message.conversationId) &&
        Objects.equals(this.isFromSender, message.isFromSender) &&
        Objects.equals(this.content, message.content) &&
        Objects.equals(this.read, message.read) &&
        Objects.equals(this.dateTime, message.dateTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, conversationId, isFromSender, content, read, dateTime);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Message {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    conversationId: ").append(toIndentedString(conversationId)).append("\n");
    sb.append("    isFromSender: ").append(toIndentedString(isFromSender)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    read: ").append(toIndentedString(read)).append("\n");
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

