import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from "prop-types";

const Notifications = ({ displayDrawer }) => {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{
              position: 'absolute',
              top: '0.25rem',
              right: '0.25rem',
              border: 'none',
              backgroundColor: '#fff',
            }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            <img src={closeIcon} alt="close-icon" />
          </button>
          <ul>
            <NotificationItem type="default"  value="New course available" />
            <NotificationItem type="urgent"  value="New resume available" />
            <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
