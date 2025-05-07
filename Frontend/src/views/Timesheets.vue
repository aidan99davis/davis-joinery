<template>
    <div>
        <!-- Add management timesheet listing, viewing, approval/declining, and querying -->
        <vue-excel-editor ref="timesheet" no-footer v-model="jsondata" new-if-bottom>
            <vue-excel-column type="string" field="name"   label="Name" />
            <vue-excel-column type="string" field="position"   label="Position" />
            <vue-excel-column type="number" field="saturday"   label="Saturday" />
            <vue-excel-column type="number" field="sunday"   label="Sunday" />
            <vue-excel-column type="number" field="monday"  label="Monday" />
            <vue-excel-column type="number" field="tuesday" label="Tuesday" />
            <vue-excel-column type="number" field="wednesday"    label="Wednesday" />
            <vue-excel-column type="number" field="thursday"  label="Thursday" />
            <vue-excel-column type="number" field="friday"  label="Friday" />
            <vue-excel-column type="select" mandatory :options="['Basic', 'Overtime']" field="work_type"  label="Work Type" />
            <vue-excel-column type="number" readonly field="total" label="Total Hours" />
            <br><b-btn @click="exportTable">Export</b-btn>
        </vue-excel-editor>
        <!-- Add per week timesheets, submit button, etc. -->
    </div>
</template>

<script>

    export default {
        name: "Timesheet",
        components: {
        },
        methods: {
            exportTable() {
                this.$refs["timesheet"].exportTable()
            }
        },
        data() {
            return {
                jsondata: [{}]
            }
        }
    }
</script>

<style scoped>

</style>