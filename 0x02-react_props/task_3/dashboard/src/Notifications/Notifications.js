import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  const listNotifications = [
    { id: 1, priority: 'default', value: 'New course available' },
    { id: 2, priority: 'urgent', value: 'New resume available' },
    { id: 3, priority: 'urgent', html: { __html: getLatestNotification() } },
  ];

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
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
        {/* Use NotificationItem component for each notification */}
        {listNotifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            type={notification.priority}
            value={notification.value}
            html={notification.html}
          />
        ))}
      </ul>
    </div>
  );
}
