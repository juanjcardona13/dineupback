import gql from "graphql-tag";
import {PaginatedType, ErrorsType} from "./general_types"

//region ============= AUTH

//region ============= PERMISSION
export function createPermissions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createPermissions($input: [CreatePermissionInput!]  ${varsStr}) {
            createPermissions(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updatePermissions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updatePermissions($input: [UpdatePermissionInput!]  ${varsStr}) {
            updatePermissions(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deletePermissions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deletePermissions($where: PermissionFilterInput!  ${varsStr}) {
            deletePermissions(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivatePermissions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivatePermissions($where: PermissionFilterInput!  ${varsStr}) {
            deactivatePermissions(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activatePermissions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activatePermissions($where: PermissionFilterInput!  ${varsStr}) {
            activatePermissions(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= GROUP
export function createGroups(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createGroups($input: [CreateGroupInput!]  ${varsStr}) {
            createGroups(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateGroups(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateGroups($input: [UpdateGroupInput!]  ${varsStr}) {
            updateGroups(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteGroups(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteGroups($where: GroupFilterInput!  ${varsStr}) {
            deleteGroups(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateGroups(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateGroups($where: GroupFilterInput!  ${varsStr}) {
            deactivateGroups(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateGroups(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateGroups($where: GroupFilterInput!  ${varsStr}) {
            activateGroups(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= USER
export function createUsers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createUsers($input: [CreateUserInput!]  ${varsStr}) {
            createUsers(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateUsers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateUsers($input: [UpdateUserInput!]  ${varsStr}) {
            updateUsers(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteUsers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteUsers($where: UserFilterInput!  ${varsStr}) {
            deleteUsers(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateUsers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateUsers($where: UserFilterInput!  ${varsStr}) {
            deactivateUsers(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateUsers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateUsers($where: UserFilterInput!  ${varsStr}) {
            activateUsers(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//endregion

//region ============= CORE

//region ============= TIMESLOT
export function createTimeSlots(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createTimeSlots($input: [CreateTimeSlotInput!]  ${varsStr}) {
            createTimeSlots(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateTimeSlots(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateTimeSlots($input: [UpdateTimeSlotInput!]  ${varsStr}) {
            updateTimeSlots(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteTimeSlots(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteTimeSlots($where: TimeSlotFilterInput!  ${varsStr}) {
            deleteTimeSlots(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateTimeSlots(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateTimeSlots($where: TimeSlotFilterInput!  ${varsStr}) {
            deactivateTimeSlots(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateTimeSlots(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateTimeSlots($where: TimeSlotFilterInput!  ${varsStr}) {
            activateTimeSlots(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= SCHEDULE
export function createSchedules(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createSchedules($input: [CreateScheduleInput!]  ${varsStr}) {
            createSchedules(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateSchedules(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateSchedules($input: [UpdateScheduleInput!]  ${varsStr}) {
            updateSchedules(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteSchedules(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteSchedules($where: ScheduleFilterInput!  ${varsStr}) {
            deleteSchedules(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateSchedules(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateSchedules($where: ScheduleFilterInput!  ${varsStr}) {
            deactivateSchedules(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateSchedules(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateSchedules($where: ScheduleFilterInput!  ${varsStr}) {
            activateSchedules(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= SCHEDULEITEM
export function createSchedulesItem(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createSchedulesItem($input: [CreateScheduleItemInput!]  ${varsStr}) {
            createSchedulesItem(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateSchedulesItem(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateSchedulesItem($input: [UpdateScheduleItemInput!]  ${varsStr}) {
            updateSchedulesItem(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteSchedulesItem(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteSchedulesItem($where: ScheduleItemFilterInput!  ${varsStr}) {
            deleteSchedulesItem(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateSchedulesItem(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateSchedulesItem($where: ScheduleItemFilterInput!  ${varsStr}) {
            deactivateSchedulesItem(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateSchedulesItem(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateSchedulesItem($where: ScheduleItemFilterInput!  ${varsStr}) {
            activateSchedulesItem(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//endregion

//region ============= ACCOUNTS

//region ============= DINEUPUSER
export function createDineUpUsers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createDineUpUsers($input: [CreateDineUpUserInput!]  ${varsStr}) {
            createDineUpUsers(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateDineUpUsers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateDineUpUsers($input: [UpdateDineUpUserInput!]  ${varsStr}) {
            updateDineUpUsers(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteDineUpUsers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteDineUpUsers($where: DineUpUserFilterInput!  ${varsStr}) {
            deleteDineUpUsers(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateDineUpUsers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateDineUpUsers($where: DineUpUserFilterInput!  ${varsStr}) {
            deactivateDineUpUsers(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateDineUpUsers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateDineUpUsers($where: DineUpUserFilterInput!  ${varsStr}) {
            activateDineUpUsers(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= ROLE
export function createRoles(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createRoles($input: [CreateRoleInput!]  ${varsStr}) {
            createRoles(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateRoles(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateRoles($input: [UpdateRoleInput!]  ${varsStr}) {
            updateRoles(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteRoles(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteRoles($where: RoleFilterInput!  ${varsStr}) {
            deleteRoles(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateRoles(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateRoles($where: RoleFilterInput!  ${varsStr}) {
            deactivateRoles(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateRoles(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateRoles($where: RoleFilterInput!  ${varsStr}) {
            activateRoles(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= EMPLOYEE
export function createEmployees(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createEmployees($input: [CreateEmployeeInput!]  ${varsStr}) {
            createEmployees(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateEmployees(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateEmployees($input: [UpdateEmployeeInput!]  ${varsStr}) {
            updateEmployees(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteEmployees(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteEmployees($where: EmployeeFilterInput!  ${varsStr}) {
            deleteEmployees(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateEmployees(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateEmployees($where: EmployeeFilterInput!  ${varsStr}) {
            deactivateEmployees(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateEmployees(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateEmployees($where: EmployeeFilterInput!  ${varsStr}) {
            activateEmployees(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= JOBFUNCTION
export function createJobFunctions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createJobFunctions($input: [CreateJobFunctionInput!]  ${varsStr}) {
            createJobFunctions(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateJobFunctions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateJobFunctions($input: [UpdateJobFunctionInput!]  ${varsStr}) {
            updateJobFunctions(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteJobFunctions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteJobFunctions($where: JobFunctionFilterInput!  ${varsStr}) {
            deleteJobFunctions(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateJobFunctions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateJobFunctions($where: JobFunctionFilterInput!  ${varsStr}) {
            deactivateJobFunctions(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateJobFunctions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateJobFunctions($where: JobFunctionFilterInput!  ${varsStr}) {
            activateJobFunctions(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//endregion

//region ============= MENU

//region ============= MENU
export function createMenus(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createMenus($input: [CreateMenuInput!]  ${varsStr}) {
            createMenus(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateMenus(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateMenus($input: [UpdateMenuInput!]  ${varsStr}) {
            updateMenus(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteMenus(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteMenus($where: MenuFilterInput!  ${varsStr}) {
            deleteMenus(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateMenus(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateMenus($where: MenuFilterInput!  ${varsStr}) {
            deactivateMenus(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateMenus(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateMenus($where: MenuFilterInput!  ${varsStr}) {
            activateMenus(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= CATEGORY
export function createCategories(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createCategories($input: [CreateCategoryInput!]  ${varsStr}) {
            createCategories(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateCategories(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateCategories($input: [UpdateCategoryInput!]  ${varsStr}) {
            updateCategories(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteCategories(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteCategories($where: CategoryFilterInput!  ${varsStr}) {
            deleteCategories(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateCategories(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateCategories($where: CategoryFilterInput!  ${varsStr}) {
            deactivateCategories(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateCategories(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateCategories($where: CategoryFilterInput!  ${varsStr}) {
            activateCategories(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= MENUITEM
export function createMenuItems(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createMenuItems($input: [CreateMenuItemInput!]  ${varsStr}) {
            createMenuItems(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateMenuItems(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateMenuItems($input: [UpdateMenuItemInput!]  ${varsStr}) {
            updateMenuItems(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteMenuItems(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteMenuItems($where: MenuItemFilterInput!  ${varsStr}) {
            deleteMenuItems(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateMenuItems(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateMenuItems($where: MenuItemFilterInput!  ${varsStr}) {
            deactivateMenuItems(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateMenuItems(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateMenuItems($where: MenuItemFilterInput!  ${varsStr}) {
            activateMenuItems(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= MENUITEMVARIANT
export function createMenuItemVariants(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createMenuItemVariants($input: [CreateMenuItemVariantInput!]  ${varsStr}) {
            createMenuItemVariants(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateMenuItemVariants(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateMenuItemVariants($input: [UpdateMenuItemVariantInput!]  ${varsStr}) {
            updateMenuItemVariants(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteMenuItemVariants(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteMenuItemVariants($where: MenuItemVariantFilterInput!  ${varsStr}) {
            deleteMenuItemVariants(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateMenuItemVariants(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateMenuItemVariants($where: MenuItemVariantFilterInput!  ${varsStr}) {
            deactivateMenuItemVariants(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateMenuItemVariants(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateMenuItemVariants($where: MenuItemVariantFilterInput!  ${varsStr}) {
            activateMenuItemVariants(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= VARIANTOPTION
export function createVariantOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createVariantOptions($input: [CreateVariantOptionInput!]  ${varsStr}) {
            createVariantOptions(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateVariantOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateVariantOptions($input: [UpdateVariantOptionInput!]  ${varsStr}) {
            updateVariantOptions(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteVariantOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteVariantOptions($where: VariantOptionFilterInput!  ${varsStr}) {
            deleteVariantOptions(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateVariantOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateVariantOptions($where: VariantOptionFilterInput!  ${varsStr}) {
            deactivateVariantOptions(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateVariantOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateVariantOptions($where: VariantOptionFilterInput!  ${varsStr}) {
            activateVariantOptions(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= ITEMIMAGE
export function createItemImages(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createItemImages($input: [CreateItemImageInput!]  ${varsStr}) {
            createItemImages(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateItemImages(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateItemImages($input: [UpdateItemImageInput!]  ${varsStr}) {
            updateItemImages(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteItemImages(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteItemImages($where: ItemImageFilterInput!  ${varsStr}) {
            deleteItemImages(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateItemImages(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateItemImages($where: ItemImageFilterInput!  ${varsStr}) {
            deactivateItemImages(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateItemImages(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateItemImages($where: ItemImageFilterInput!  ${varsStr}) {
            activateItemImages(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= OPTIONGROUP
export function createOptionGroups(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createOptionGroups($input: [CreateOptionGroupInput!]  ${varsStr}) {
            createOptionGroups(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateOptionGroups(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateOptionGroups($input: [UpdateOptionGroupInput!]  ${varsStr}) {
            updateOptionGroups(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteOptionGroups(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteOptionGroups($where: OptionGroupFilterInput!  ${varsStr}) {
            deleteOptionGroups(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateOptionGroups(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateOptionGroups($where: OptionGroupFilterInput!  ${varsStr}) {
            deactivateOptionGroups(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateOptionGroups(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateOptionGroups($where: OptionGroupFilterInput!  ${varsStr}) {
            activateOptionGroups(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= ITEMOPTION
export function createItemOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createItemOptions($input: [CreateItemOptionInput!]  ${varsStr}) {
            createItemOptions(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateItemOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateItemOptions($input: [UpdateItemOptionInput!]  ${varsStr}) {
            updateItemOptions(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteItemOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteItemOptions($where: ItemOptionFilterInput!  ${varsStr}) {
            deleteItemOptions(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateItemOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateItemOptions($where: ItemOptionFilterInput!  ${varsStr}) {
            deactivateItemOptions(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateItemOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateItemOptions($where: ItemOptionFilterInput!  ${varsStr}) {
            activateItemOptions(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= ITEMTAG
export function createItemTags(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createItemTags($input: [CreateItemTagInput!]  ${varsStr}) {
            createItemTags(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateItemTags(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateItemTags($input: [UpdateItemTagInput!]  ${varsStr}) {
            updateItemTags(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteItemTags(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteItemTags($where: ItemTagFilterInput!  ${varsStr}) {
            deleteItemTags(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateItemTags(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateItemTags($where: ItemTagFilterInput!  ${varsStr}) {
            deactivateItemTags(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateItemTags(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateItemTags($where: ItemTagFilterInput!  ${varsStr}) {
            activateItemTags(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//endregion

//region ============= ORDERS

//region ============= ORDERSTATUS
export function createOrderStatus(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createOrderStatus($input: [CreateOrderStatusInput!]  ${varsStr}) {
            createOrderStatus(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateOrderStatus(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateOrderStatus($input: [UpdateOrderStatusInput!]  ${varsStr}) {
            updateOrderStatus(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteOrderStatus(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteOrderStatus($where: OrderStatusFilterInput!  ${varsStr}) {
            deleteOrderStatus(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateOrderStatus(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateOrderStatus($where: OrderStatusFilterInput!  ${varsStr}) {
            deactivateOrderStatus(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateOrderStatus(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateOrderStatus($where: OrderStatusFilterInput!  ${varsStr}) {
            activateOrderStatus(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= ORDER
export function createOrders(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createOrders($input: [CreateOrderInput!]  ${varsStr}) {
            createOrders(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateOrders(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateOrders($input: [UpdateOrderInput!]  ${varsStr}) {
            updateOrders(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteOrders(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteOrders($where: OrderFilterInput!  ${varsStr}) {
            deleteOrders(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateOrders(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateOrders($where: OrderFilterInput!  ${varsStr}) {
            deactivateOrders(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateOrders(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateOrders($where: OrderFilterInput!  ${varsStr}) {
            activateOrders(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= ORDERITEM
export function createOrderItems(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createOrderItems($input: [CreateOrderItemInput!]  ${varsStr}) {
            createOrderItems(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateOrderItems(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateOrderItems($input: [UpdateOrderItemInput!]  ${varsStr}) {
            updateOrderItems(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteOrderItems(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteOrderItems($where: OrderItemFilterInput!  ${varsStr}) {
            deleteOrderItems(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateOrderItems(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateOrderItems($where: OrderItemFilterInput!  ${varsStr}) {
            deactivateOrderItems(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateOrderItems(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateOrderItems($where: OrderItemFilterInput!  ${varsStr}) {
            activateOrderItems(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= ORDERITEMOPTION
export function createOrderItemOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createOrderItemOptions($input: [CreateOrderItemOptionInput!]  ${varsStr}) {
            createOrderItemOptions(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateOrderItemOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateOrderItemOptions($input: [UpdateOrderItemOptionInput!]  ${varsStr}) {
            updateOrderItemOptions(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteOrderItemOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteOrderItemOptions($where: OrderItemOptionFilterInput!  ${varsStr}) {
            deleteOrderItemOptions(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateOrderItemOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateOrderItemOptions($where: OrderItemOptionFilterInput!  ${varsStr}) {
            deactivateOrderItemOptions(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateOrderItemOptions(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateOrderItemOptions($where: OrderItemOptionFilterInput!  ${varsStr}) {
            activateOrderItemOptions(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//endregion

//region ============= RESTAURANT

//region ============= RESTAURANT
export function createRestaurants(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createRestaurants($input: [CreateRestaurantInput!]  ${varsStr}) {
            createRestaurants(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateRestaurants(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateRestaurants($input: [UpdateRestaurantInput!]  ${varsStr}) {
            updateRestaurants(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteRestaurants(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteRestaurants($where: RestaurantFilterInput!  ${varsStr}) {
            deleteRestaurants(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateRestaurants(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateRestaurants($where: RestaurantFilterInput!  ${varsStr}) {
            deactivateRestaurants(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateRestaurants(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateRestaurants($where: RestaurantFilterInput!  ${varsStr}) {
            activateRestaurants(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= BRANCH
export function createBranches(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createBranches($input: [CreateBranchInput!]  ${varsStr}) {
            createBranches(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateBranches(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateBranches($input: [UpdateBranchInput!]  ${varsStr}) {
            updateBranches(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteBranches(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteBranches($where: BranchFilterInput!  ${varsStr}) {
            deleteBranches(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateBranches(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateBranches($where: BranchFilterInput!  ${varsStr}) {
            deactivateBranches(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateBranches(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateBranches($where: BranchFilterInput!  ${varsStr}) {
            activateBranches(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= BRANCHPHONENUMBER
export function createBranchPhoneNumbers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createBranchPhoneNumbers($input: [CreateBranchPhoneNumberInput!]  ${varsStr}) {
            createBranchPhoneNumbers(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateBranchPhoneNumbers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateBranchPhoneNumbers($input: [UpdateBranchPhoneNumberInput!]  ${varsStr}) {
            updateBranchPhoneNumbers(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteBranchPhoneNumbers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteBranchPhoneNumbers($where: BranchPhoneNumberFilterInput!  ${varsStr}) {
            deleteBranchPhoneNumbers(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateBranchPhoneNumbers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateBranchPhoneNumbers($where: BranchPhoneNumberFilterInput!  ${varsStr}) {
            deactivateBranchPhoneNumbers(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateBranchPhoneNumbers(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateBranchPhoneNumbers($where: BranchPhoneNumberFilterInput!  ${varsStr}) {
            activateBranchPhoneNumbers(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= TABLE
export function createTables(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createTables($input: [CreateTableInput!]  ${varsStr}) {
            createTables(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateTables(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateTables($input: [UpdateTableInput!]  ${varsStr}) {
            updateTables(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteTables(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteTables($where: TableFilterInput!  ${varsStr}) {
            deleteTables(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateTables(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateTables($where: TableFilterInput!  ${varsStr}) {
            deactivateTables(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateTables(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateTables($where: TableFilterInput!  ${varsStr}) {
            activateTables(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= SOCIALMEDIAPLATFORM
export function createSocialMediaPlatforms(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createSocialMediaPlatforms($input: [CreateSocialMediaPlatformInput!]  ${varsStr}) {
            createSocialMediaPlatforms(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateSocialMediaPlatforms(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateSocialMediaPlatforms($input: [UpdateSocialMediaPlatformInput!]  ${varsStr}) {
            updateSocialMediaPlatforms(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteSocialMediaPlatforms(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteSocialMediaPlatforms($where: SocialMediaPlatformFilterInput!  ${varsStr}) {
            deleteSocialMediaPlatforms(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateSocialMediaPlatforms(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateSocialMediaPlatforms($where: SocialMediaPlatformFilterInput!  ${varsStr}) {
            deactivateSocialMediaPlatforms(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateSocialMediaPlatforms(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateSocialMediaPlatforms($where: SocialMediaPlatformFilterInput!  ${varsStr}) {
            activateSocialMediaPlatforms(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//region ============= SOCIALMEDIA
export function createSocialMedia(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation createSocialMedia($input: [CreateSocialMediaInput!]  ${varsStr}) {
            createSocialMedia(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function updateSocialMedia(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation updateSocialMedia($input: [UpdateSocialMediaInput!]  ${varsStr}) {
            updateSocialMedia(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deleteSocialMedia(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deleteSocialMedia($where: SocialMediaFilterInput!  ${varsStr}) {
            deleteSocialMedia(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function deactivateSocialMedia(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation deactivateSocialMedia($where: SocialMediaFilterInput!  ${varsStr}) {
            deactivateSocialMedia(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
export function activateSocialMedia(fields, extraArgs=[]) {
    let varsStr = ""
    for (let newArg of extraArgs) {
        varsStr += `$${newArg.variableName}: ${newArg.variableType} `
    }
    const defaultFields = 'id';
    const selectedFields = fields ? fields : defaultFields;

    const mutation = gql`
        mutation activateSocialMedia($where: SocialMediaFilterInput!  ${varsStr}) {
            activateSocialMedia(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errors {
                    ${ErrorsType}
                }
            }
        }
    `;
    return mutation;
};
//endregion

//endregion

