import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    transition: border-left .2s, transform .2s;

    &:nth-child(1):hover{
      border-left: .4rem solid var(--green);
    }
    &:nth-child(2):hover{
      border-left: .4rem solid var(--red);
    }
    &:nth-child(3):hover{
      transform: scale(1.04)
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    
    &:last-child{
      background: var(--green);
      color: #FFF
    }
  }
`;
