import styled from 'styled-components'

export const EachList = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`
export const ImageTitleContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Image = styled.img`
  width: 100px;
  height: 70px;
  margin-right: 8px;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`
export const Name = styled.p`
  font-size: 20px;
  margin: 0px;
  font-weight: normal;
  font-family: 'Roboto';
  color: #ffffff;
`
export const Genre = styled(Name)`
  color: #3b82f6;
  padding-top: 5px;
`
export const TimeAndDeleteContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Time = styled(Name)`
  font-size: 14px;
  margin-right: 5px;
`
export const Button = styled.button`
  border: none;
  outline: none;
  margin: 10px;
  background: transparent;
`
