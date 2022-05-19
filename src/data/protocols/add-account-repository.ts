import { AddAccountModel } from './../../domain/usecases/addAcount'
import { AccountModel } from '../../domain/models/account'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
