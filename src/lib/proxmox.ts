import proxmoxApi from "proxmox-api";

export async function getStats() {
  const username = process.env.PROXMOX_USER;
  const password = process.env.PROXMOX_PASS;
  if (!username || !password) {
    throw new Error('Proxmox credentials not found');
  }
  const promox = proxmoxApi({ host: 'ark.cialabs.tech', password: password, username: `${username}@pam` });

  // list nodes
  const nodes = await promox.nodes.$get();
  return nodes

}
