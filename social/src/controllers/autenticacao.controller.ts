import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Autenticacao} from '../models';
import {AutenticacaoRepository} from '../repositories';

export class AutenticacaoController {
  constructor(
    @repository(AutenticacaoRepository)
    public autenticacaoRepository : AutenticacaoRepository,
  ) {}

  @post('/autenticacaos')
  @response(200, {
    description: 'Autenticacao model instance',
    content: {'application/json': {schema: getModelSchemaRef(Autenticacao)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Autenticacao, {
            title: 'NewAutenticacao',
            exclude: ['id'],
          }),
        },
      },
    })
    autenticacao: Omit<Autenticacao, 'id'>,
  ): Promise<Autenticacao> {
    return this.autenticacaoRepository.create(autenticacao);
  }

  @get('/autenticacaos/count')
  @response(200, {
    description: 'Autenticacao model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Autenticacao) where?: Where<Autenticacao>,
  ): Promise<Count> {
    return this.autenticacaoRepository.count(where);
  }

  @get('/autenticacaos')
  @response(200, {
    description: 'Array of Autenticacao model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Autenticacao, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Autenticacao) filter?: Filter<Autenticacao>,
  ): Promise<Autenticacao[]> {
    return this.autenticacaoRepository.find(filter);
  }

  @patch('/autenticacaos')
  @response(200, {
    description: 'Autenticacao PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Autenticacao, {partial: true}),
        },
      },
    })
    autenticacao: Autenticacao,
    @param.where(Autenticacao) where?: Where<Autenticacao>,
  ): Promise<Count> {
    return this.autenticacaoRepository.updateAll(autenticacao, where);
  }

  @get('/autenticacaos/{id}')
  @response(200, {
    description: 'Autenticacao model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Autenticacao, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Autenticacao, {exclude: 'where'}) filter?: FilterExcludingWhere<Autenticacao>
  ): Promise<Autenticacao> {
    return this.autenticacaoRepository.findById(id, filter);
  }

  @patch('/autenticacaos/{id}')
  @response(204, {
    description: 'Autenticacao PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Autenticacao, {partial: true}),
        },
      },
    })
    autenticacao: Autenticacao,
  ): Promise<void> {
    await this.autenticacaoRepository.updateById(id, autenticacao);
  }

  @put('/autenticacaos/{id}')
  @response(204, {
    description: 'Autenticacao PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() autenticacao: Autenticacao,
  ): Promise<void> {
    await this.autenticacaoRepository.replaceById(id, autenticacao);
  }

  @del('/autenticacaos/{id}')
  @response(204, {
    description: 'Autenticacao DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.autenticacaoRepository.deleteById(id);
  }
}
