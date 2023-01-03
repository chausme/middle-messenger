export default () => new URL(window.location.href)?.hash?.slice(1);
