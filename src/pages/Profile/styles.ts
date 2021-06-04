import styled from 'styled-components';
import { RiBookMarkLine, RiBookOpenLine  } from 'react-icons/ri';
import { AiOutlineProject, AiOutlineInbox } from "react-icons/ai";

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;

  padding: var(--verticalPadding) var(--horizontalPadding);
  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.div`
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Repos = styled.div`
  margin-top: var(--verticalPadding);

  > h2 {
    font-size: 16px;
    font-weight: normal;
  }
  > div {
    margin-top: 8px;

    display: grid;
    grid-gap: 16px;

    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;

export const CalendarHeading = styled.span`
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const OverviewIcon = styled(RiBookOpenLine)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const ProjectsIcon = styled(AiOutlineProject)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const PackagesIcon = styled(AiOutlineInbox)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const Tab = styled.div`

  .line {
    display: flex;
    width: 200vw;
    border-bottom: 1px solid var(--border);
    margin-left: -50vw;
  }

  &.mobile {
    margin-top: var(--verticalPadding);

    .content {
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
  &.desktop {
    display: none;

    @media (min-width: 768px) {
      display: unset;

      .wrapper {
        display: flex;
        margin: 0 auto;
        max-width: 1280px;
      }

      .offset {
        width: 25%;
        margin-right: var(--horizontalPadding);
      }
    }
  }
`;

export const ItemNavTab = styled.div`
  align-items: center;
  width: 10vw;
  padding-top: 16px;
  padding-bottom: 14px;

  .menu-item-link {
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
  }

  .menu-item-link::after{
      content: '';
      display: block;
      width: 10vw;
      border-bottom: 2px solid var(--black);
      border-radius: 1px;
      opacity: 0;
      margin-top: 12px;
      position: absolute;
  }

  .menu-item-link:hover::after{
      opacity: 0.15;
      transition: .3s ease;
  }

  .menu-item{
      display: flex;
      width: 100%;
      justify-content: center;
      opacity: 0.5;
      align-items: center;
  }

  .menu-item:hover{
      opacity: 1;
      transition: .3s ease;
  }

  .menu-item-active{
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
  }

  .menu-item-active:hover{
      transition: .3s ease;
  }

  .menu-item-link-active {
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
  }

  .menu-item-link-active::after{
      content: '';
      display: block;
      width: 10vw;
      border-bottom: 2px solid var(--orange);
      border-radius: 1px;
      margin-top: 12px;
      position: absolute;
  }

  .number {
      font-size: 10px;
      background: var(--ticker);
      padding: 2px 6px;
      border-radius: 24px;
      margin-left: 5px;
  }

`;

