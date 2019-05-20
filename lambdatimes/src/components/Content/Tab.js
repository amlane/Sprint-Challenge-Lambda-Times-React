import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AllTabs = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
    color: black;

    :hover {
      text-decoration: underline;
    }

    ${props => (props.type === 'selected-tab' ? `background: white; border: 1px solid` : null)}
    ${props => (props.type === 'inactive-tab' ? `background-color: black; color: white`: null)}
`;



const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <AllTabs
      type={props.tab === props.selectedTab ? 'selected-tab' : 'inactive-tab'}
      onClick={ () => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </AllTabs>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string
}

export default Tab;
