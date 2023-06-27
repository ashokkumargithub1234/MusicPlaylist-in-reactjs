import {AiOutlineDelete} from 'react-icons/ai'
import {
  EachList,
  ImageTitleContainer,
  Image,
  TitleContainer,
  Name,
  Genre,
  TimeAndDeleteContainer,
  Time,
  Button,
} from './styledComponents'

const EachMusic = props => {
  const {eachMusic, deleteMusic} = props
  const {imageUrl, name, genre, duration, id} = eachMusic
  const deleteMusicList = () => {
    deleteMusic(id)
  }
  return (
    <EachList>
      <ImageTitleContainer>
        <Image src={imageUrl} alt="track" />
        <TitleContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </TitleContainer>
      </ImageTitleContainer>
      <TimeAndDeleteContainer>
        <Time>{duration}</Time>
        <Button type="button" onClick={deleteMusicList} data-testid="delete">
          <AiOutlineDelete color="#ffffff" fontSize={18} />
        </Button>
      </TimeAndDeleteContainer>
    </EachList>
  )
}
export default EachMusic
