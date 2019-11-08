/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ComponentProps, FC } from "react";

type ButtonVariant = "default" | "call-to-action";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({ variant = "default", ...rest }) => {
  return (
    <button
      type="button"
      css={[
        {
          background: "linen",
          border: "none",
          borderRadius: 5,
          padding: "1em 0.7em",
          fontSize: "inherit",
          boxShadow: "0 -3px rgba(0,0,0,0.2) inset",
          cursor: "pointer",
          ":focus, :hover": {
            boxShadow: "0 -2px rgba(0,0,0,0.2) inset"
          }
        },
        variant === "call-to-action"
          ? { background: "coral" }
          : { textDecoration: "underline" }
      ]}
      {...rest}
    />
  );
};

// eslint-disable-next-line import/first
import { render } from "react-dom";

render(
  <div>
    <Button css={{ margin: "1em" }} onClick={() => console.log("login")}>
      Login
    </Button>
    <Button
      variant="call-to-action"
      onClick={() => console.log("join the movement!")}
    >
      Join the movement!
    </Button>
  </div>,
  document.getElementById("root")
);
