import styled from 'styled-components'

export const MusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #152850;
  height: 150vh;
`
export const ArtistContainer = styled.div`
  width: 100%;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  height: 60vh;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 52px;
`
export const ArtistName = styled.h1`
  font-size: 38px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
  margin: 0px;
`
export const ArtistInfo = styled.p`
  font-size: 28px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #ffffff;
  margin-top: 10px;
`
export const PlayListsContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
`

export const HeaderSearchContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PlayListHeading = styled(ArtistName)`
  font-size: 24px;
`
export const SearchInputContainer = styled.div`
  border: 1px solid #ffffff;
  height: 30px;
  width: 250px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border-radius: 5px;
`
export const SearchInput = styled.input`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #ffffff;
  flex-grow: 1;
  background: transparent;
  border: none;
  outline: none;
`
export const Paragraph = styled.p`
  text-align: center;
  color: #ffffff;
  font-size: 36px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-top: 32px;
`
export const MusicLists = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  height: 300px;
  overflow-y: scroll;
`
