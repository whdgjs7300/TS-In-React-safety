import styled from "styled-components";

// 경고 창 스타일
const WarningContainer = styled.div`
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-align: center;
`;

const OKButton = styled.button`
  margin-top: 10px; /* 버튼 위에 여백을 줘서 간격을 조절 */
`;

const NoData = () => {
    const goBack = () => {
        window.history.back();
    }
    return ( 
        <>
        <WarningContainer>
            <p>해당 정보는 없습니다.</p>
            <OKButton onClick={goBack}>뒤로가기</OKButton>
        </WarningContainer>
            </>
    );
}

export default NoData;