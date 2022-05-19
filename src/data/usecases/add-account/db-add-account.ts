import { AddAccount, AddAccountModel, AccountModel, Encrypter, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly AddAccountRepository: AddAccountRepository

  constructor (encryter: Encrypter, AddAccountRepository: AddAccountRepository) {
    this.encrypter = encryter
    this.AddAccountRepository = AddAccountRepository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = this.encrypter.encrypt(accountData.password)
    await this.AddAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    return new Promise(resolve => resolve(null))
  }
}
