import styled from "@emotion/styled";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display:flex;
  align-items: center;
  justify-content:center;
  background: rgba(0, 0, 0, 0.5);
`;

const ContenedorModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  gap: 16px;
  background: white;
  max-width: 500px;
  max-height: 300px;
  border-radius: 20px;
`;

export function Modal({children,state}) {
  return (
    <>
      {state.active &&
        <Overlay>
          <ContenedorModal>
            {children}
          </ContenedorModal>
        </Overlay> }
    </>
  );
}
