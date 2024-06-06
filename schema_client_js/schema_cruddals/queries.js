import gql from "graphql-tag";
import {PaginatedType, ErrorsType} from "./general_types"

//region ============= AUTH

//region ============= PERMISSION
export function readPermission(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readPermission($where: PermissionFilterInput!  ${varsStr}) {
            readPermission(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function listPermissions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query listPermissions($orderBy: PermissionOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            listPermissions(orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
export function searchPermissions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchPermissions($where: PermissionFilterInput $orderBy: PermissionOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchPermissions(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= GROUP
export function readGroup(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readGroup($where: GroupFilterInput!  ${varsStr}) {
            readGroup(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function listGroups(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query listGroups($orderBy: GroupOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            listGroups(orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
export function searchGroups(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchGroups($where: GroupFilterInput $orderBy: GroupOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchGroups(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= USER
export function readUser(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readUser($where: UserFilterInput!  ${varsStr}) {
            readUser(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function listUsers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query listUsers($orderBy: UserOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            listUsers(orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
export function searchUsers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchUsers($where: UserFilterInput $orderBy: UserOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchUsers(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//endregion

//region ============= CORE

//region ============= TIMESLOT
export function readTimeSlot(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readTimeSlot($where: TimeSlotFilterInput!  ${varsStr}) {
            readTimeSlot(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function listTimeSlots(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query listTimeSlots($orderBy: TimeSlotOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            listTimeSlots(orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
export function searchTimeSlots(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchTimeSlots($where: TimeSlotFilterInput $orderBy: TimeSlotOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchTimeSlots(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= SCHEDULE
export function readSchedule(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readSchedule($where: ScheduleFilterInput!  ${varsStr}) {
            readSchedule(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function listSchedules(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query listSchedules($orderBy: ScheduleOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            listSchedules(orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
export function searchSchedules(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchSchedules($where: ScheduleFilterInput $orderBy: ScheduleOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchSchedules(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= SCHEDULEITEM
export function readScheduleItem(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readScheduleItem($where: ScheduleItemFilterInput!  ${varsStr}) {
            readScheduleItem(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function listSchedulesItem(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query listSchedulesItem($orderBy: ScheduleItemOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            listSchedulesItem(orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
export function searchSchedulesItem(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchSchedulesItem($where: ScheduleItemFilterInput $orderBy: ScheduleItemOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchSchedulesItem(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//endregion

//region ============= ACCOUNTS

//region ============= DINEUPUSER
export function readDineUpUser(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readDineUpUser($where: DineUpUserFilterInput $me: Boolean  ${varsStr}) {
            readDineUpUser(where: $where me: $me ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchDineUpUsers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchDineUpUsers($where: DineUpUserFilterInput $orderBy: DineUpUserOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchDineUpUsers(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= ROLE
export function readRole(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readRole($where: RoleFilterInput!  ${varsStr}) {
            readRole(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchRoles(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchRoles($where: RoleFilterInput $orderBy: RoleOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchRoles(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= EMPLOYEE
export function readEmployee(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readEmployee($where: EmployeeFilterInput!  ${varsStr}) {
            readEmployee(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchEmployees(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchEmployees($where: EmployeeFilterInput $orderBy: EmployeeOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchEmployees(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= JOBFUNCTION
export function readJobFunction(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readJobFunction($where: JobFunctionFilterInput!  ${varsStr}) {
            readJobFunction(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchJobFunctions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchJobFunctions($where: JobFunctionFilterInput $orderBy: JobFunctionOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchJobFunctions(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//endregion

//region ============= MENU

//region ============= MENU
export function readMenu(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readMenu($where: MenuFilterInput!  ${varsStr}) {
            readMenu(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchMenus(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchMenus($where: MenuFilterInput $orderBy: MenuOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchMenus(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= CATEGORY
export function readCategory(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readCategory($where: CategoryFilterInput!  ${varsStr}) {
            readCategory(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchCategories(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchCategories($where: CategoryFilterInput $orderBy: CategoryOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchCategories(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= MENUITEM
export function readMenuItem(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readMenuItem($where: MenuItemFilterInput!  ${varsStr}) {
            readMenuItem(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchMenuItems(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchMenuItems($where: MenuItemFilterInput $orderBy: MenuItemOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchMenuItems(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= MENUITEMVARIANT
export function readMenuItemVariant(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readMenuItemVariant($where: MenuItemVariantFilterInput!  ${varsStr}) {
            readMenuItemVariant(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchMenuItemVariants(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchMenuItemVariants($where: MenuItemVariantFilterInput $orderBy: MenuItemVariantOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchMenuItemVariants(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= VARIANTOPTION
export function readVariantOption(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readVariantOption($where: VariantOptionFilterInput!  ${varsStr}) {
            readVariantOption(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchVariantOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchVariantOptions($where: VariantOptionFilterInput $orderBy: VariantOptionOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchVariantOptions(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= ITEMIMAGE
export function readItemImage(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readItemImage($where: ItemImageFilterInput!  ${varsStr}) {
            readItemImage(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchItemImages(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchItemImages($where: ItemImageFilterInput $orderBy: ItemImageOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchItemImages(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= OPTIONGROUP
export function readOptionGroup(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readOptionGroup($where: OptionGroupFilterInput!  ${varsStr}) {
            readOptionGroup(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchOptionGroups(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchOptionGroups($where: OptionGroupFilterInput $orderBy: OptionGroupOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchOptionGroups(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= ITEMOPTION
export function readItemOption(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readItemOption($where: ItemOptionFilterInput!  ${varsStr}) {
            readItemOption(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchItemOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchItemOptions($where: ItemOptionFilterInput $orderBy: ItemOptionOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchItemOptions(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= ITEMTAG
export function readItemTag(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readItemTag($where: ItemTagFilterInput!  ${varsStr}) {
            readItemTag(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchItemTags(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchItemTags($where: ItemTagFilterInput $orderBy: ItemTagOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchItemTags(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//endregion

//region ============= ORDERS

//region ============= ORDERSTATUS
export function readOrderStatus(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readOrderStatus($where: OrderStatusFilterInput!  ${varsStr}) {
            readOrderStatus(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchOrderStatus(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchOrderStatus($where: OrderStatusFilterInput $orderBy: OrderStatusOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchOrderStatus(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= ORDER
export function readOrder(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readOrder($where: OrderFilterInput!  ${varsStr}) {
            readOrder(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchOrders(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchOrders($where: OrderFilterInput $orderBy: OrderOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchOrders(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= ORDERITEM
export function readOrderItem(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readOrderItem($where: OrderItemFilterInput!  ${varsStr}) {
            readOrderItem(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchOrderItems(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchOrderItems($where: OrderItemFilterInput $orderBy: OrderItemOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchOrderItems(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= ORDERITEMOPTION
export function readOrderItemOption(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readOrderItemOption($where: OrderItemOptionFilterInput!  ${varsStr}) {
            readOrderItemOption(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchOrderItemOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchOrderItemOptions($where: OrderItemOptionFilterInput $orderBy: OrderItemOptionOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchOrderItemOptions(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//endregion

//region ============= RESTAURANT

//region ============= RESTAURANT
export function readRestaurant(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readRestaurant($where: RestaurantFilterInput!  ${varsStr}) {
            readRestaurant(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchRestaurants(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchRestaurants($where: RestaurantFilterInput $orderBy: RestaurantOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchRestaurants(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= BRANCH
export function readBranch(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readBranch($where: BranchFilterInput!  ${varsStr}) {
            readBranch(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchBranches(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchBranches($where: BranchFilterInput $orderBy: BranchOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchBranches(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= BRANCHPHONENUMBER
export function readBranchPhoneNumber(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readBranchPhoneNumber($where: BranchPhoneNumberFilterInput!  ${varsStr}) {
            readBranchPhoneNumber(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchBranchPhoneNumbers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchBranchPhoneNumbers($where: BranchPhoneNumberFilterInput $orderBy: BranchPhoneNumberOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchBranchPhoneNumbers(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= TABLE
export function readTable(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readTable($where: TableFilterInput!  ${varsStr}) {
            readTable(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchTables(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchTables($where: TableFilterInput $orderBy: TableOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchTables(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= SOCIALMEDIAPLATFORM
export function readSocialMediaPlatform(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readSocialMediaPlatform($where: SocialMediaPlatformFilterInput!  ${varsStr}) {
            readSocialMediaPlatform(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchSocialMediaPlatforms(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchSocialMediaPlatforms($where: SocialMediaPlatformFilterInput $orderBy: SocialMediaPlatformOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchSocialMediaPlatforms(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//region ============= SOCIALMEDIA
export function readSocialMedia(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query readSocialMedia($where: SocialMediaFilterInput!  ${varsStr}) {
            readSocialMedia(where: $where ) {
                ${selectedFields}
            }
        }
    `;
    return query;
};
export function searchSocialMedia(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const query = gql`
        query searchSocialMedia($where: SocialMediaFilterInput $orderBy: SocialMediaOrderByInput $paginated: PaginatedInput  ${varsStr}) {
            searchSocialMedia(where: $where orderBy: $orderBy paginated: $paginated ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
    return query;
};
//endregion

//endregion

