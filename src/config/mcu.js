/**
 * MCU 直连地址（非 /hw 代理时）。
 * `VITE_MCU_IP_PROFILE`：1 → 10.33.24.73:8080；0 → 192.168.4.1；未写视为 1。
 * @param {Record<string, string | undefined>} env
 */
export function resolveMcuDirectUrl(env) {
  const profileOn = env?.VITE_MCU_IP_PROFILE !== '0'
  return profileOn ? 'http://10.33.24.73:8080' : 'http://192.168.4.1'
}
