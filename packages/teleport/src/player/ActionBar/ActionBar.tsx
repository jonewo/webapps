/*
Copyright 2019 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, ButtonPrimary } from 'design';
import { MenuIcon, MenuItem, MenuItemIcon } from 'shared/components/MenuAction';
import { MenuProps } from 'shared/components/MenuAction/types';
import * as Icons from 'design/Icon';
import cfg from 'teleport/config';

export default function ActionBar({
  clusterId = '',
  onLogout,
}: ActionBarProps) {
  return (
    <Flex alignItems="center">
      <MenuIcon
        buttonIconProps={{ mr: 2, ml: 2, size: 0, style: { fontSize: '16px' } }}
        menuProps={menuProps}
      >
        <MenuItem as={NavLink} to={cfg.getClusterRoute(clusterId)}>
          <MenuItemIcon as={Icons.Home} mr="2" />
          Dashboard
        </MenuItem>
        <MenuItem>
          <ButtonPrimary my={3} block onClick={onLogout}>
            Sign Out
          </ButtonPrimary>
        </MenuItem>
      </MenuIcon>
    </Flex>
  );
}

type ActionBarProps = {
  clusterId?: string;
  onLogout: () => void;
};

const menuListCss = () => `
  width: 250px;
`;

const menuProps: MenuProps = {
  menuListCss: menuListCss,
  anchorOrigin: {
    vertical: 'center',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
};
