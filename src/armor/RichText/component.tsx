import React, { Ref, PropsWithChildren } from "react";
import { css, ClassNames } from "@emotion/react";

interface BaseProps {
  className: string;
  [key: string]: unknown;
}
type OrNull<T> = T;

export const Button = React.forwardRef(function Button(
  {
    className,
    active,
    reversed,
    ...props
  }: PropsWithChildren<
    {
      active: boolean;
      reversed: boolean;
    } & BaseProps
  >,
  ref: Ref<OrNull<HTMLSpanElement>>
) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <span
          {...props}
          ref={ref}
          className={cx(
            className,
            css`
              cursor: pointer;
              color: ${reversed
                ? active
                  ? "white"
                  : "#aaa"
                : active
                ? "black"
                : "#ccc"};
            `
          )}
        />
      )}
    </ClassNames>
  );
});

export const Icon = React.forwardRef(function Icon(
  { className, ...props }: PropsWithChildren<BaseProps>,
  ref: Ref<OrNull<HTMLSpanElement>>
) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <span
          {...props}
          ref={ref}
          className={cx(
            "material-icons",
            className,
            css`
              font-size: 18px;
              vertical-align: text-bottom;
            `
          )}
        />
      )}
    </ClassNames>
  );
});

export const Toolbar = React.forwardRef(function Toolbar(
  { className, ...props }: PropsWithChildren<BaseProps>,
  ref: Ref<OrNull<HTMLDivElement>>
) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <Menu
          {...props}
          ref={ref}
          className={cx(
            className,
            css`
              position: relative;
              padding: 1px 18px 17px;
              margin: 0 -20px;
              border-bottom: 2px solid #eee;
              margin-bottom: 20px;
            `
          )}
        />
      )}
    </ClassNames>
  );
});

export const Menu = React.forwardRef(function Menu(
  { className, ...props }: PropsWithChildren<BaseProps>,
  ref: Ref<OrNull<HTMLDivElement>>
) {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <div
          {...props}
          ref={ref}
          className={cx(
            className,
            css`
              & > * {
                display: inline-block;
              }
              & > * + * {
                margin-left: 15px;
              }
            `
          )}
        />
      )}
    </ClassNames>
  );
});
