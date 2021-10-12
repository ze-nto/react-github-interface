import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 50%auto;
`;

export const WrapperTabList = styled(TabList)`
    list-style: none;
    padding: 4px;
    display: flex;
    margin: 0px;
    
    `;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 8px;
    user-select: none;
    cursor: pointer;

    &:focus{
        outline: none;
    }

    &.is-selected{
        border-bottom: 1px solid #fff;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }

`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    min-height: 40vh;
    padding: 8px;
    margin-top: 5px;
    display: none;

    &.is-selected{
        display: block;
    }

`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;
`;