import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

interface Button {
  title: string;
  icon?: IconProp;
  color: string;
  link: string;
  tooltipTarget: string;
  tooltip?: string;
}

const Button: React.FC<Button> = ({ title, icon, color, link, tooltipTarget, tooltip }) => {
  return (
    <Link
      className={`${color} px-6 py-4 xl:px-4 xl:py-2 rounded-2xl drop-shadow-sm text-gruv-fg0 font-semibold transition-all ease-in-out duration-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl active:brightness-75 active:translate-y-1 active:scale-95 active:drop-shadow-none flex flex-row justify-center xl:justify-between gap-x-2 items-center text-2xl xl:text-xl z-10`}
      target='_blank'
      rel='noreferrer noopener'
      to={link}
      data-tooltip-id={tooltipTarget}
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          fixedWidth
        />
      )}
      <span>{title}</span>
      <Tooltip
        id={tooltipTarget}
        content={tooltip}
        opacity={'0.95'}
        style={{
          background: '#3c3836',
          color: '#f9f5d7',
          borderRadius: '16px',
          padding: '10px 18px',
          fontSize: '16px',
        }}
      />
    </Link>
  );
};

export default Button;
