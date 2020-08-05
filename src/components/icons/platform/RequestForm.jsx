/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { toSquidInkIcon } from '../mixins/toSquidInkIcon.jsx'

import { MediaSmall } from '../../../style/media'

const Size = {
  Desktop: {
    S: 14,
    M: 16,
    L: 18,
  },
  Mobile: {
    S: 10,
    M: 10,
    L: 12,
  },
}
const Margin = {
  Desktop: {
    S: 3,
    M: 3,
    L: 4,
  },
  Mobile: {
    S: 2,
    M: 1,
    L: 1,
  },
}

const Text = styled.p`
  font-size: ${({ size, isSidePreview, isPreviewMobile }) =>
    isPreviewMobile || isSidePreview ? Size.Mobile[size] : Size.Desktop[size]}px !important;
  margin-top: ${({ size, isSidePreview, isPreviewMobile }) =>
    isPreviewMobile || isSidePreview ? Margin.Mobile[size] : Margin.Desktop[size]}px;
  line-height: 0.8;
  text-align: center;

  @media ${MediaSmall} {
    font-size: ${({ size }) => Size.Mobile[size]}px;
    margin-top: ${({ size }) => Margin.Mobile[size]}px;
  }
`

export const RequestFormIcon = ({ size, isSidePreview, isPreviewMobile }) => (
  <Text size={size} isSidePreview={isSidePreview} isPreviewMobile={isPreviewMobile}>
    book
    <br />
    me
  </Text>
)

// export const RequestFormIcon = toSquidInkIcon(() => (
//   <g id="request-form">
//     <path
//       d="M42.8892 27V9C42.8892 8.46957 42.6791 7.96086 42.3051 7.58579C41.9311 7.21071 41.4238 7 40.8949 7H32.9176"
//       fill="none"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M12.9744 7H6.99148C6.46255 7 5.95529 7.21071 5.58128 7.58579C5.20727 7.96086 4.99716 8.46957 4.99716 9V44C4.99716 44.5304 5.20727 45.0391 5.58128 45.4142C5.95529 45.7893 6.46255 46 6.99148 46H34.9119"
//       fill="none"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M28.929 7H16.9631"
//       fill="none"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M16.9631 5C16.9631 3.89543 16.0702 3 14.9687 3C13.8673 3 12.9744 3.89543 12.9744 5V9.9C12.9744 11.0046 13.8673 11.9 14.9687 11.9C16.0702 11.9 16.9631 11.0046 16.9631 9.9V5Z"
//       fill="none"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M32.9176 5C32.9176 3.89543 32.0247 3 30.9233 3C29.8219 3 28.929 3.89543 28.929 5V9.9C28.929 11.0046 29.8219 11.9 30.9233 11.9C32.0247 11.9 32.9176 11.0046 32.9176 9.9V5Z"
//       fill="none"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M36.4077 46C42.1902 46 46.8778 41.299 46.8778 35.5C46.8778 29.701 42.1902 25 36.4077 25C30.6252 25 25.9375 29.701 25.9375 35.5C25.9375 41.299 30.6252 46 36.4077 46Z"
//       fill="none"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M12.9744 20V16H16.9631"
//       fill="none"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M21.9489 20V16H25.9375"
//       fill="none"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M30.9233 20V16H34.9119"
//       fill="none"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M12.9744 29V25H16.9631"
//       fill="none"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M21.9489 29V25H25.9375"
//       fill="none"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M12.9744 39V35H16.9631"
//       fill="none"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M21.9489 39V35H25.9375"
//       fill="none"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M35.5176 38.6037C35.5303 37.8498 35.6158 37.2542 35.7742 36.8171C35.9326 36.38 36.2557 35.8953 36.7435 35.3631L37.9885 34.0802C38.5206 33.4783 38.7867 32.8321 38.7867 32.1415C38.7867 31.4763 38.6125 30.9568 38.264 30.583C37.9156 30.2029 37.4088 30.0128 36.7435 30.0128C36.0973 30.0128 35.5778 30.1839 35.185 30.526C34.7922 30.8681 34.5958 31.3274 34.5958 31.904H32.8377C32.8504 30.8776 33.2147 30.0508 33.9306 29.4236C34.6528 28.7901 35.5905 28.4733 36.7435 28.4733C37.9409 28.4733 38.8722 28.7964 39.5375 29.4426C40.209 30.0825 40.5448 30.9631 40.5448 32.0845C40.5448 33.1932 40.0316 34.2861 39.0053 35.3631L37.9694 36.3895C37.507 36.9026 37.2757 37.6407 37.2757 38.6037H35.5176ZM35.4416 41.6162C35.4416 41.3311 35.5271 41.0935 35.6982 40.9035C35.8756 40.7071 36.1353 40.6089 36.4774 40.6089C36.8196 40.6089 37.0793 40.7071 37.2567 40.9035C37.4341 41.0935 37.5228 41.3311 37.5228 41.6162C37.5228 41.9013 37.4341 42.1389 37.2567 42.3289C37.0793 42.5127 36.8196 42.6045 36.4774 42.6045C36.1353 42.6045 35.8756 42.5127 35.6982 42.3289C35.5271 42.1389 35.4416 41.9013 35.4416 41.6162Z"
//       stroke="none"
//     />
//   </g>
// ))
