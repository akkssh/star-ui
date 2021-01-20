import * as React from 'react';
import Styled, { keyframes } from 'styled-components';

interface ISkeleton {
    /* if true, show skeleton. Otherwise return children */
    isLoading?: Boolean;
    /* children: prefer string type */
    children?: React.ReactNode;
    /* Skeleton height. Default height: inherit */
    height?: String;
    /* Skeleton width. Default width: 100% */
    width?: String;
    /* Skeleton border radius. Default value: 2px */
    borderRadius?: String;
    /* Skeleton animation speed. Default: 1200ms */
    speed?: String;
    /* Repeat count for skeleton. Default: 1 */
    repeatCount?: Number;
}
const DEFAULT_PROPS = {
    isLoading: true,
    height: 'inherit',
    width: '100%',
    borderRadius: '2px',
    speed: '1200ms',
    repeatCount: 1
};

const shine = keyframes`
    0% { background-position: 100% 50%; }
    100% { background-position: -100% 50%; }
`;
const StyledSkeleton = Styled.div`
    margin-bottom: ${(props: any) => props.marginBottom || '16px'};
    box-sizing: border-box;
    height: ${(props: any) => props.height || 'inherit'};
    animation-duration: ${(props: any) => props.speed || '1200ms'};
    width: ${(props: any) => props.width || '100%'};
    animation-name: ${shine};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border-radius: ${(props: any) => props.borderRadius || '2px'};
    background-image: linear-gradient(90deg, lightGrey 0%, lightGrey 20%, transparent 50%, lightGrey 80%, lightGrey 100%);
    background-position-x: 0%;
    background-position-y: 0%;
    background-size: 200% 200%;
`;

const range = (count: Number = 1) => {
    return Array(count)
        .fill(1)
        .map((_, index) => index + 1);
};

const Skeleton = (props: ISkeleton) => {
    const { isLoading, children, repeatCount, ...others } = props;
    const lines = range(repeatCount);

    if (isLoading) {
        return (
            <>
                {lines.map((line) => (
                    <StyledSkeleton {...others} key={line} />
                ))}
            </>
        );
    }

    return <div>{children}</div>;
};

Skeleton.defaultProps = DEFAULT_PROPS;
export default Skeleton;
