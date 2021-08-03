/*
 * Wazuh app - React helper of 0hook for getting value suggestions
 * Copyright (C) 2015-2021 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

/** UserTypes Office365 module filter
 *  https://docs.microsoft.com/en-us/office/office-365-management-api/office-365-management-activity-api-schema#user-type
 */
const OFFICE_365_USER_TYPE: string[] = [
  'Regular',
  'Reserved',
  'Admin',
  'DcAdmin',
  'System',
  'Application',
  'ServicePrincipal',
  'CustomPolicy',
  'SystemPolicy',
];

const DATA_OFFICE_365_USER_TYPE = 'data.office365.UserType';

export const getCustomValueSuggestion = (field: { name: string }): string[] => {
  switch (field.name) {
    case DATA_OFFICE_365_USER_TYPE:
      return OFFICE_365_USER_TYPE;
    default:
      return [];
  }
};