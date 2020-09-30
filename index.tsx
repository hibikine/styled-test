/**
 * クラス名を渡した場合と渡さない場合のstyled componentsの挙動の違い
 */
import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";

/** classNameを渡すコンポーネント */
const HasClassName: React.FC<{ className?: string }> = ({
  children,
  className,
}) => <div className={className}>{children}</div>;

/** classNameを渡さないコンポーネント */
const NoClassName: React.FC = ({ children }) => <div>{children}</div>;

// それぞれStyledで囲む
const StyledHasClassName = styled(HasClassName)`
  color: red;
`;
const StyledNoClassName = styled(NoClassName)`
  color: red;
`;

render(
  <div>
    <StyledHasClassName>This is with className</StyledHasClassName>
    <StyledNoClassName>This is no className</StyledNoClassName>
  </div>,
  document.getElementById("root")
);
