package com.isep.feedback.api.model;

import java.util.Date;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;

/**
 * Message
 */

@Entity
@Table(name = "messages")
public class Message   {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  @JsonProperty("id")
  private Long id;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "conversation")
  @JsonProperty("conversation")
  private Conversation conversation;

  @Column(name= "is_from_sender")
  @JsonProperty("is_from_sender")
  private Boolean isFromSender;

  @Column(name = "content")
  @JsonProperty("content")
  private String content;

  @Column(name = "message_read")
  @JsonProperty("message_read")
  private boolean messageRead;

  @Temporal(TemporalType.TIMESTAMP)
  @Column(name = "dateTime")
  @JsonProperty("dateTime")
  private Date dateTime;

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

 /* public Message conversationId(Long conversationId) {
    this.conversationId = conversationId;
    return this;
  }*/

  public Message(Conversation conversation) {
    this.conversation = conversation;
  }

  public Conversation getConversation() {
    return conversation;
  }

  public void setConversation(Conversation conversation) {
    this.conversation = conversation;
  }

  /**
   * Get conversationId
   * @return conversationId
  */
  @ApiModelProperty(value = "")


  /*public Long getConversationId() {
    return conversationId;
  }

  public void setConversationId(Long conversationId) {
    this.conversationId = conversationId;
  }*/



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

  public Message messageRead(boolean messageRead) {
    this.messageRead = messageRead;
    return this;
  }

  /**
   * Get messageRead
   * @return messageRead
  */
  @ApiModelProperty(value = "")


  public boolean getMessageRead() {
    return messageRead;
  }

  public void setMessageRead(Boolean messageRead) {
    this.messageRead = messageRead;
  }



  public Message dateTime(Date dateTime) {
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
        Objects.equals(this.conversation, message.conversation) &&
        Objects.equals(this.isFromSender, message.isFromSender) &&
        Objects.equals(this.content, message.content) &&
        Objects.equals(this.messageRead, message.messageRead) &&
        Objects.equals(this.dateTime, message.dateTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, conversation, isFromSender, content, messageRead, dateTime);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Message {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    conversationId: ").append(toIndentedString(conversation)).append("\n");
    sb.append("    isFromSender: ").append(toIndentedString(isFromSender)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    messageRead: ").append(toIndentedString(messageRead)).append("\n");
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

