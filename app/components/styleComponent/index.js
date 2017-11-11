import styled, { keyframes } from 'styled-components'
import { Button, Input } from 'antd'

/**
 * Basic styles components
 */
export const scale = keyframes`
  50% {
    transform: scale(1.05);
  }
`

export const blink = keyframes`
  50% {
    opacity: 0.5;
  }
`

export const bounce = keyframes`
  30% {
    transform: translateY(-4px);
  }
`

export const Round = styled.span`
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 0 2px;
  border-radius: 50%;
  background-color: rgb(29, 51, 68);
  opacity: 0.3;
  animation: ${blink} 1s linear infinite ${props => (props.order ? `${props.order * 0.3333}s` : '0s')},
             ${bounce} 1s linear infinite ${props => (props.order ? `${props.order * 0.2222}s` : '0s')};
`

export const ReviewBlock = styled.div`
  margin: 2px 0;
`

/**
 * ChatBot - FeedbackChat
 */

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  background: rgba(255, 255, 255, 1);

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

/**
 * Sidebar
 */
export const Sidebar = styled.aside`
  display: flex;
  flex-basis: 20%;
  flex-direction: column;
  height: 100vh;
  color: rgba(255, 255, 255, 1);
  background: rgba(29, 51, 68, 1);
  padding: 30px 25px;

  @media (max-width: 640px) {
    height: auto;
    padding: 10px;
  }
`

export const SideBarBot = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;

  p {
    font-size: 1.5em;
    font-weight: bold;
  }

  @media (max-width: 640px) {
    margin-bottom: 10px;
  }
`

export const SideBarBotImg = styled.div`
  position: relative;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5%;
  background: rgba(255, 255, 255, 1);

  img {
    max-width: 90%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 640px) {
    height: 40px;
    width: 40px;
    margin-right: 5px;
  }
`

export const SideBarText = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: normal;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`

export const SideBarCountDown = styled.div`
  border-radius: 8px;
  color: rgba(29, 51, 68, 1);
  font-size: 12px;
  padding: 12px 14px 10px;
  margin: 25px 0;
  background: rgba(255, 255, 255, 1);

  .countdown {
    font-size: 16px;
    font-weight: bold;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

/**
 * Content
 */
export const Content = styled.div`
  position: relative;
  display: flex;
  flex-basis: 80%;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
  background: rgba(238, 240, 242, 1);
  max-height: 100vh;
  overflow: hidden;
`

/**
 * ReceiverList on top
 */
export const ReceiverList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-basis: 7%;
  padding: 0 50px;
  background: rgb(255, 255, 255);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05), 0 1px 6px rgba(0, 0, 0, 0.03);
  color: rgba(29, 51, 68, 1);
  z-index: 99;

  @media (max-width: 640px) {
    padding: 0 10px;
    flex-basis: 10%;
  }
`

export const Receiver = SideBarBot.extend`
  width: auto;
  margin: 0 20px 0 10px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  p {
    font-size: 1em;
    font-weight: normal;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    flex-wrap: nowrap;
    max-width: 80px;
    margin: 0 5px 0 5px;
    oveflow-x: scroll;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }
  }
`

export const ReceiverListImg = SideBarBotImg.extend`
  width: 30px;
  height: 30px;
  margin-right: 4px;
  border: 1px solid rgba(29, 51, 68, 0.1);
`

/**
 * ChatBox
 */
export const ChatBoxWrapper = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 640px) {
    flex-basis: 0;
  }
`

export const ChatBox = styled.div`
  position: relative;
  padding: 30px 0 10px;
  margin-top: auto;
  overflow: scroll;
`

export const Chat = styled.div`
  display: block;
  padding: 10px 50px;
  text-align: ${props => (props.isUser && 'right')};

  .chat__photo {
    display: inline-block;
    vertical-align: bottom;
    position: relative;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    overflow: hidden;
    background: rgba(255, 255, 255, 1);

    img {
      max-width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .chat__edit {
    display: inline-block;
    visibility: hidden;
    vertical-align: middle;
    color: rgba(29, 51, 68, 0.5);
    font-size: 12px;
  }

  &:hover {
    background: rgba(220, 225, 230, 0.3);
    
    .chat__edit {
      visibility: visible;
    } 
  }

  @media (max-width: 640px) {
    padding: 5px 10px;
  }
`

export const ChatBubble = styled.div`
  display: inline-block;
  vertical-align: middle;
  border-radius: 5px;
  font-size: 14px;
  color: ${props => (props.isUser ? 'rgba(255, 255, 255, 1)' : 'rgba(29, 51, 68, 1)')};
  background: ${props => (props.isUser ? 'rgba(29, 51, 68, 1)' : 'rgba(255, 255, 255, 1)')};
  padding: 8px 13px 7px;
  margin: 0 12px;
  max-width: 55%;
  word-break: break-word;
  text-align: left;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
`

export const ChatBubbleIndicator = ChatBubble.extend`
  transform-origin: 50%;
  animation: ${scale} 2s linear infinite;
`

export const AnswerHighLight = styled.div`
  box-sizing: border-box;
  // color: rgba(29, 51, 68, 1);
  // background: rgba(255, 255, 255, 1);
  color: rgba(13, 177, 218, 1);
  display: inline;
  margin: 0;
  font-size: 14px;
  cursor: pointer;
`

/**
 * AnswerDisplay
 */
export const AnswerDisplay = styled.div`
  width: 100%;
  min-height: 50px;
  padding: 0;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  align-items: stretch;
  // justify-content: center;
  // align-items: center;
`

export const AnswerContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 90%;
  padding: 10px 10px 10px 50px;

  @media (max-width: 640px) {
    padding: 3px 10px 3px 10px;
  }
`

export const SendButton = styled(Button)`
  flex: 1 1 10%;
  border: none;
  border-radius: 0;
  background: rgba(29, 51, 68, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  height: auto;

  &:hover, &:focus {
    background: rgba(29, 51, 68, 1);
  }

  &[disabled] {
    background: rgba(29, 51, 68, 1);
    color: rgba(255, 255, 255, 1) !important;
    opacity: 0.3;

    &:hover {
      background: rgba(29, 51, 68, 1);
      color: rgba(255, 255, 255, 1) !important;
    }
  }
`

export const TagName = styled.div`
  box-sizing: border-box;
  background-color: rgba(40, 130, 199, 1);
  display: inline-block;
  margin: 2px 4px 2px 0;
  padding: 2px 6px;
  border-radius: 4px;
  color: #fff;
  font-size: 11px;
  letter-spacing: 0.5px;
`

export const FileBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`

export const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

export const FileLabel = styled.label`
  position: absolute;
  top: 4px;
  right: 0;
  display: block;
  margin-right: 10px;
  font-size: 13px;
  color: rgba(29, 51, 68, 1);
  white-space: nowrap;
  cursor: pointer;
`

export const AntInput = styled(Input)`
  width: 100%;
  padding-right: 30px;
  font-size: 13px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  resize: none;
  outline: none;

  &:focus {
    box-shadow: none;
    border-bottom: 1px solid rgba(29, 51, 68, 1);
  }

  &:hover {
    border-color: rgba(29, 51, 68, 1);
  }
`
