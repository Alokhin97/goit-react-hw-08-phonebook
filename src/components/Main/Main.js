import { MainBg } from './Main.styled';
import { HelloTitle, Text, TextBox } from './Main.styled';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const Main = () => {
  return (
    <MainBg>
      <TextBox>
        <HelloTitle>Hello!</HelloTitle>
        <Text>
          I am your faithful assistant <InsertEmoticonIcon />, your phone book!
          Register and you will have many advantages!
        </Text>
      </TextBox>
    </MainBg>
  );
};

export default Main;