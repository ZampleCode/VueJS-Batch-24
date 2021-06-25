import MemberTableRow from './MemberTableRow.js'

export const MemberTable = {
  template: `
<table border=1 class="table">
        <thead>
        <tr>
            <th><abbr title="Position" @click="$emit('edit', member)">Photo</abbr></th>
            <th>Data</th>
            <th><abbr title="Played">Action</abbr></th>
        </tr>
        </thead>

       <member-table-row  v-for="member of $store.state.members" :member="member" v-bind:key="member.id" 
            :edit="edit"
            :remove="remove"
            :upload="upload"
            ></member-table-row>
    </table>
    `,
  components: {
    'member-table-row': MemberTableRow
  },
  data () {
    return {}
  },
  props: ['members', 'edit', 'remove', 'upload']
}
