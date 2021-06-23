const MemberTableRow = {
  template: `
        <tr>
            <td>
                <img width=100 :src="member.photo_profile ? imageUrl +  member.photo_profile  : 'https://via.placeholder.com/150x150'" alt="">
            </td>
            <td>
                <b>Name : </b>{{member.name}}
                <br>
                <b>Address : </b> {{member.address}}
                <br>
                <b>No.HP : </b> {{member.no_hp}}
                <br>
            </td>
            <td>
                <button class="button is-primary" @click="edit(member)">Edit</button>
                <button class="button is-danger" @click="remove(member.id)">Hapus</button>
                <button class="button is-info" @click="upload(member)">Upload Foto</button>
            </td>
        </tr>
    `,
  data () {
    return {imageUrl: 'https://demo-api-vue.sanbercloud.com'}
  },
  props: ['member', 'edit', 'remove', 'upload']
}
export default MemberTableRow