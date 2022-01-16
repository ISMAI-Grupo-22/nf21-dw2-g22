import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Conta} from '../models';
import {ContaRepository} from '../repositories';

export class ContaController {
  constructor(
    @repository(ContaRepository)
    public contaRepository: ContaRepository,
  ) { }

  @post('/contas')
  @response(200, {
    description: 'Conta model instance',
    content: {'application/json': {schema: getModelSchemaRef(Conta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conta, {
            title: 'NewConta',
            exclude: ['id'],
          }),
        },
      },
    })
    conta: Omit<Conta, 'id'>,
  ): Promise<Conta> {
    return this.contaRepository.create(conta);
  }

  @get('/contas/count')
  @response(200, {
    description: 'Conta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Conta) where?: Where<Conta>,
  ): Promise<Count> {
    return this.contaRepository.count(where);
  }

  @get('/contas')
  @response(200, {
    description: 'Array of Conta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Conta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Conta) filter?: Filter<Conta>,
  ): Promise<Conta[]> {
    return this.contaRepository.find(filter);
  }

  @patch('/contas')
  @response(200, {
    description: 'Conta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conta, {partial: true}),
        },
      },
    })
    conta: Conta,
    @param.where(Conta) where?: Where<Conta>,
  ): Promise<Count> {
    return this.contaRepository.updateAll(conta, where);
  }

  @get('/contas/{id}')
  @response(200, {
    description: 'Conta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Conta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Conta, {exclude: 'where'}) filter?: FilterExcludingWhere<Conta>
  ): Promise<Conta> {
    return this.contaRepository.findById(id, filter);
  }

  @patch('/contas/{id}')
  @response(204, {
    description: 'Conta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conta, {partial: true}),
        },
      },
    })
    conta: Conta,
  ): Promise<void> {
    await this.contaRepository.updateById(id, conta);
  }

  @put('/contas/{id}')
  @response(204, {
    description: 'Conta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() conta: Conta,
  ): Promise<void> {
    await this.contaRepository.replaceById(id, conta);
  }

  @del('/contas/{id}')
  @response(204, {
    description: 'Conta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.contaRepository.deleteById(id);
  }
}
