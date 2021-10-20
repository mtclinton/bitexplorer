export interface Tx {

}

export interface Block {
    network: string
    blockhash: string
    block_no: number
    mining_difficulty: string
    time: number
    confirmations: number
    is_orphan: boolean
    txs: []
    merkleroot: string
    next_blockhash: string
    size: number
}

export interface Info {
    name: string
    acronym: string
    network: string
    symbol_htmlcode: string
    url: string
    mining_difficulty: string
    unconfirmed_txs: number
    blocks: number
    price: string
    price_base: string
    price_update_time: number
    hashrate: string

}

export interface IGetInfoResponse {
    status: 'success' | 'failure',
    data: Info,
}

export interface IGetBlockResponse {
    status: 'success' | 'failure',
    data: Block,
}