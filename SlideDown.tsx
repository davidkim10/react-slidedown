import React, { useState } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import { getClassNames } from "./utils";
import "./SlideDown.css";

interface ISlideDownProps {
  className?: string;
  isOpen: boolean;
  onEnter?: (node: HTMLDivElement) => void;
  onEntered?: (node: HTMLDivElement) => void;
  onEntering?: (node: HTMLDivElement) => void;
  onExit?: (node: HTMLDivElement) => void;
  onExited?: (node: HTMLDivElement) => void;
  onExiting?: (node: HTMLDivElement) => void;
  style?: React.CSSProperties;
  timeout?: number | { enter?: number; exit?: number; appear?: number };
  unmountOnExit?: boolean;
}

export const SlideDown: React.FC<ISlideDownProps> = ({
  children,
  className,
  isOpen = false,
  onEnter = () => null,
  onEntered,
  onEntering,
  onExit,
  onExited,
  onExiting,
  style,
  timeout = {
    appear: 500,
    enter: 300,
    exit: 100,
  },
  unmountOnExit,
}) => {
  const [height, setHeight] = useState<number | string>(0);

  const transitionStyles = {
    entering: {
      height,
      transition: "height 400ms ease",
    },
    entered: {
      height: "auto",
      transition: "height 400ms ease",
    },
    exiting: {
      height,
      transition: "all 300ms ease-out",
      padding: 0,
      margin: 0,
    },
    exited: {
      height: 0,
      transition: "all 300ms ease-out",
      padding: 0,
      margin: 0,
    },
  };

  const handleOnEnter = (node) => {
    setHeight(node?.scrollHeight || 0);
    onEnter(node);
  };

  return (
    <Transition<undefined>
      in={isOpen}
      timeout={timeout}
      onEnter={handleOnEnter}
      onEntered={onEntered}
      onEntering={onEntering}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
      unmountOnExit={unmountOnExit}
    >
      {(state) => (
        <div
          aria-expanded={isOpen ? "true" : "false"}
          className={getClassNames([
            "slidedown",
            `slidedown--${state}`,
            className,
          ])}
          style={{
            height: 0,
            overflow: "hidden",
            ...style,
            ...transitionStyles[state],
          }}
        >
          <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            {children}
          </CSSTransition>
        </div>
      )}
    </Transition>
  );
};
