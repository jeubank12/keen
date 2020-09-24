import React, { FC } from 'react';

import { StyledButton, StyledAnchor, IconSocket } from './button.styles';

import { ButtonVariant, ButtonSize, ButtonType } from './types';

type Props = {
  /** Component React.Children nodes */
  children: React.ReactNode;
  /** Type of button */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Button style */
  style?: ButtonType;
  /** Disabled state */
  isDisabled?: boolean;
  /** Anchor element href property */
  href?: string;
  /** Anchor element target property */
  target?: string;
  /** HTML button element type */
  htmlType?: 'button' | 'submit' | 'reset';
  /** Click event handler */
  onClick?: (e: React.SyntheticEvent) => void;
  /** Icon component */
  icon?: JSX.Element;
  /** Fit width to parent container */
  fullWidth?: boolean;
};

export const Button: FC<Props> = ({
  children,
  variant = 'primary',
  onClick,
  href,
  target = '_blank',
  isDisabled = false,
  htmlType = 'button',
  size = 'default',
  style = 'solid',
  icon,
  fullWidth = false,
}) => {
  if (href) {
    return (
      <StyledAnchor
        data-testid="button"
        isDisabled={isDisabled}
        variant={variant}
        size={size}
        href={href}
        body={style}
        target={target}
        fullWidth={fullWidth}
        onClick={(e: React.MouseEvent<HTMLElement>) =>
          !isDisabled && onClick && onClick(e)
        }
      >
        {children}
        {icon && <IconSocket>{icon}</IconSocket>}
      </StyledAnchor>
    );
  }

  return (
    <StyledButton
      data-testid="button"
      isDisabled={isDisabled}
      type={htmlType}
      variant={variant}
      body={style}
      size={size}
      fullWidth={fullWidth}
      onClick={(e: React.MouseEvent<HTMLElement>) =>
        !isDisabled && onClick && onClick(e)
      }
    >
      {children}
      {icon && <IconSocket data-testid="button-icon-socket">{icon}</IconSocket>}
    </StyledButton>
  );
};

export default Button;
