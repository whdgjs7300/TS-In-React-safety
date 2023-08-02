import {Background, LoadingText, LoadingImage} from '../CSS/styles';
import Spinner from '../assets/spinner.gif';


const Loading = () => {

    return ( 
        <div>
        <Background>
            <LoadingText>잠시만 기다려 주세요.</LoadingText>
            <LoadingImage src={Spinner} alt="loading" />
        </Background>
        </div>
    );
}

export default Loading;