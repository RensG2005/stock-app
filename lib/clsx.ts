export default function clsx(...classes) {
  return classes.filter(Boolean).join(' ');
}
