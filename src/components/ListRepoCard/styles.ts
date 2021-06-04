import styled, { css } from 'styled-components';
import { RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';


export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1.5px solid var(--border);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 30px;
  border-radius: 6px;
  margin-top: 10px;
`;

export const Topside = styled.div`
  > header {
    display: flex;
    align-items: center;

    > a {
      font-size: 18px;
      font-weight: 600;
      color: var(--link);

      text-decoration: none;

      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }

  > p {
    margin: 8px 0 16px;
    font-size: 12px;
    color: var(--gray);
    letter-spacing: 0.1px;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const Botside = styled.div`
  > ul {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;
      margin-right: 16px;

      > span {
        margin-left: 5px;
        font-size: 12px;
        color: var(--gray);
      }
    }
  }

  .language {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;

    &.other {
      background: var(--other-language);
    }
    &.javascript {
      background: var(--javascript);
    }
    &.typescript {
      background: var(--typescript);
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;

export const Chart = styled.div`
  display: flex;
  flex-direction: column;

  &:hover{
    .ChartComplement{
      opacity: 1;
    }
    .ChartInfo{
      opacity: 1;
    }
  }

  .ChartComplement{
    width: 10px;
    height: 10px;
    background-color: #252A2F;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: -10px;
    transform: rotate(45deg);
    transform-origin: left top 0;
    opacity: 0;
  }
  
  .ChartInfo{
    display: flex;
    background-color: #252A2F;
    margin-top: 5px;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 120px;
    height: 30px;
    border-radius: 10px;
    opacity: 0;
  }

  .ChartInfo:hover{
    opacity: 1;
    transition: .3s ease;
  }


`

export const ChartContainer = styled.div`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  opacity: 1;

`
export const ChartInfoText = styled.span`
  color: white;
  font-size: 10px;
`
