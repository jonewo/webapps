/**
 * Copyright 2020 Gravitational, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// TS: move *Positions and Origins types
// to design/Popover.js once converted to ts
type HorizontalPositions = 'left' | 'center' | 'right' | number;
type VerticalPositions = 'top' | 'center' | 'bottom' | number;
type Origins = {
  vertical: VerticalPositions;
  horizontal: HorizontalPositions;
};

export type MenuProps = {
  anchorOrigin?: Origins;
  transformOrigin?: Origins;
  // CSS supplied to MenuList to be consumed by styled-component
  menuListCss?: (props?: any) => string;
};

export type CSSProps = {
  // inline-styling
  style?: { [key: string]: string };
  // TS: temp handling of styled-system
  [key: string]: any;
};

export type GeneralProps = {
  defaultOpen?: boolean;
  menuProps?: MenuProps;
};