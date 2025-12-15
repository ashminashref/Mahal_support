import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const StyledBadge = styled(Badge)(({ theme }) => ({
  [`& .${badgeClasses.badge}`]: {
    // Adjust these values to move the dot.
    top: 6, 
    right: 4,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`, 
  },
}));

export default function NotificationBadge() {
  return (
    <IconButton>
      <StyledBadge color="error" overlap="circular" variant="dot">
        <NotificationsNoneIcon fontSize="small" />
      </StyledBadge>
    </IconButton>
  );
}