import PropTypes from "prop-types";

export default function Notification({ title }) {
  return <p>{title}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
